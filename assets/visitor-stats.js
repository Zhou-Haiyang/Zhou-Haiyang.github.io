(function () {
  "use strict";
  var productionHost = "zhou-haiyang.github.io";
  var statsBlocks = document.querySelectorAll("[data-visitor-stats]");
  var showPreview = new URLSearchParams(window.location.search).has("preview-stats");
  var cacheKey = "visitor-stats:soxft:v1:" + productionHost;
  var endpoints = ["https://bsz.iirose.cn/api", "https://busuanzi.9420.ltd/api"];
  var cached = null;
  var identity = "";
  var badge = null;

  if (window.location.hostname.toLowerCase() !== productionHost) {
    if (!showPreview) {
      for (var i = 0; i < statsBlocks.length; i += 1) {
        statsBlocks[i].hidden = true;
        statsBlocks[i].style.display = "none";
      }
    }
    return;
  }
  if (showPreview || !statsBlocks.length || window.__visitorStatsStarted) { return; }
  window.__visitorStatsStarted = true;

  function valid(data) {
    return data && Number.isSafeInteger(data.site_uv) && data.site_uv >= 0 &&
      Number.isSafeInteger(data.site_pv) && data.site_pv >= data.site_uv;
  }

  function render(data, state) {
    var title = state === "live" ?
      "Visitor statistics from busuanzi.9420.ltd; counted since 6 October 2026." :
      "Last successful count: " + new Date(data.savedAt).toLocaleString() +
      ". Saved count; automatically refreshed when the service is available.";
    var uv = document.getElementById("busuanzi_value_site_uv");
    var pv = document.getElementById("busuanzi_value_site_pv");
    if (uv) { uv.textContent = String(data.site_uv); }
    if (pv) { pv.textContent = String(data.site_pv); }
    for (var i = 0; i < statsBlocks.length; i += 1) {
      statsBlocks[i].hidden = false;
      statsBlocks[i].style.display = "";
      statsBlocks[i].setAttribute("data-stats-state", state);
      statsBlocks[i].setAttribute("title", title);
    }
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "visitor-stats-status";
      statsBlocks[0].appendChild(badge);
    }
    badge.textContent = state === "live" ? "" : "(cached)";
    badge.hidden = state === "live";
  }

  function unavailable() {
    if (cached) { render(cached, "cached"); return; }
    // With no verified numbers, do not leave broken placeholders in the footer.
    for (var i = 0; i < statsBlocks.length; i += 1) {
      statsBlocks[i].hidden = true;
      statsBlocks[i].style.display = "none";
      statsBlocks[i].setAttribute("data-stats-state", "unavailable");
    }
  }

  try {
    cached = JSON.parse(window.localStorage.getItem(cacheKey));
    if (!valid(cached) || !Number.isSafeInteger(cached.savedAt) ||
        cached.savedAt <= 0 || cached.savedAt > Date.now()) { cached = null; }
  } catch (error) { cached = null; }
  try { identity = window.localStorage.getItem("bsz-id") || ""; } catch (error) {}
  if (cached) {
    render(cached, "cached");
  } else {
    // Keep the rest of the page immediately usable while loading.
    for (var i = 0; i < statsBlocks.length; i += 1) {
      statsBlocks[i].hidden = true;
      statsBlocks[i].style.display = "none";
    }
  }

  function accept(data, response) {
    if (!data || data.success !== true || !valid(data.data)) {
      throw new Error("Invalid visitor statistics");
    }
    var nextIdentity = response.headers.get("Set-Bsz-Identity");
    if (nextIdentity) { identity = nextIdentity; }
    cached = {
      site_uv: data.data.site_uv,
      site_pv: data.data.site_pv,
      savedAt: Date.now()
    };
    render(cached, "live");
    try {
      window.localStorage.setItem(cacheKey, JSON.stringify(cached));
      if (identity) { window.localStorage.setItem("bsz-id", identity); }
    } catch (error) {
      // Browser storage is optional; live counting must still work without it.
    }
  }

  function request(endpoint, method) {
    return new Promise(function (resolve, reject) {
      var controller = new AbortController();
      var settled = false;
      var timer = setTimeout(function () {
        settled = true;
        controller.abort();
        reject(new Error("Visitor statistics timeout"));
      }, 8000);
      var headers = {
        "x-bsz-referer": "https://" + productionHost + window.location.pathname
      };
      if (identity) { headers.Authorization = "Bearer " + identity; }
      window.fetch(endpoint, {
        method: method,
        headers: headers,
        credentials: "omit",
        cache: "no-store",
        referrerPolicy: "no-referrer",
        signal: controller.signal
      }).then(function (response) {
        if (!response.ok) { throw new Error("Visitor statistics HTTP " + response.status); }
        return response.json().then(function (data) {
          if (settled) { return; }
          accept(data, response);
          settled = true;
          clearTimeout(timer);
          resolve();
        });
      }).catch(function (error) {
        if (settled) { return; }
        settled = true;
        clearTimeout(timer);
        reject(error);
      });
    });
  }

  // Both endpoints serve the same soxft instance. A POST increments PV;
  // retries MUST be GETs: an interrupted POST might already have been counted.
  request(endpoints[0], "POST")
    .catch(function () { return request(endpoints[0], "GET"); })
    .catch(function () { return request(endpoints[1], "GET"); })
    .catch(unavailable);
}());
