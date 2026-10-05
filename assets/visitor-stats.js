(function () {
  var productionHost = "zhou-haiyang.github.io";
  var statsBlocks = document.querySelectorAll("[data-visitor-stats]");
  var showPreview = new URLSearchParams(window.location.search).has("preview-stats");
  var cacheKey = "visitor-stats:busuanzi:v1:" + productionHost;
  var cached = null;

  if (window.location.hostname.toLowerCase() !== productionHost) {
    if (!showPreview) {
      for (var i = 0; i < statsBlocks.length; i += 1) {
        statsBlocks[i].hidden = true;
      }
    }
    return;
  }
  if (showPreview || !statsBlocks.length) {
    return;
  }

  function valid(data) {
    return data && typeof data.site_uv === "number" &&
      typeof data.site_pv === "number" &&
      Number.isSafeInteger(data.site_uv) && data.site_uv >= 0 &&
      Number.isSafeInteger(data.site_pv) && data.site_pv >= 0;
  }

  function render(data, state, title) {
    var uv = document.getElementById("busuanzi_value_site_uv");
    var pv = document.getElementById("busuanzi_value_site_pv");
    if (uv) { uv.textContent = data ? String(data.site_uv) : "N/A"; }
    if (pv) { pv.textContent = data ? String(data.site_pv) : "N/A"; }
    for (var i = 0; i < statsBlocks.length; i += 1) {
      statsBlocks[i].setAttribute("data-stats-state", state);
      statsBlocks[i].setAttribute("title", title);
    }
  }

  try {
    cached = JSON.parse(window.localStorage.getItem(cacheKey));
    if (!valid(cached) || !Number.isSafeInteger(cached.savedAt) ||
        cached.savedAt <= 0 || cached.savedAt > Date.now()) {
      cached = null;
    }
  } catch (error) {
    cached = null;
  }
  if (cached) {
    render(cached, "cached", "Last successful count (" +
      new Date(cached.savedAt).toLocaleString() + "); refreshing.");
  }

  // Use the original service so existing site totals are preserved.
  // The upstream loader has no error or timeout handling for its JSONP request.
  function request(attempt) {
    var script = document.createElement("script");
    var callback = "BusuanziCallback_" + Date.now() + "_" + attempt +
      "_" + Math.floor(Math.random() * 1000000);
    var finished = false;
    var timeout;

    function cleanup() {
      clearTimeout(timeout);
      script.onerror = null;
      if (script.parentNode) { script.parentNode.removeChild(script); }
      // A timed-out response may still execute; ignore it rather than double count.
      window[callback] = function () {};
      setTimeout(function () { delete window[callback]; }, 60000);
    }

    function fail() {
      if (finished) { return; }
      finished = true;
      cleanup();
      if (attempt < 2) {
        setTimeout(function () { request(attempt + 1); }, 3000);
        return;
      }
      render(cached, cached ? "cached" : "unavailable", cached ?
        "Statistics service unavailable. Last successful count: " +
          new Date(cached.savedAt).toLocaleString() :
        "Statistics service temporarily unavailable. Please try again later.");
    }

    window[callback] = function (data) {
      if (finished) { return; }
      if (!valid(data)) { fail(); return; }
      finished = true;
      cleanup();
      render(data, "live", "Live visitor statistics provided by Busuanzi.");
      try {
        window.localStorage.setItem(cacheKey, JSON.stringify({
          site_uv: data.site_uv, site_pv: data.site_pv, savedAt: Date.now()
        }));
      } catch (error) {
        // Counting still works when storage is disabled.
      }
    };
    script.async = true;
    script.referrerPolicy = "no-referrer-when-downgrade";
    script.src = "https://busuanzi.ibruce.info/busuanzi?jsonpCallback=" + callback;
    script.onerror = fail;
    timeout = setTimeout(fail, 8000);
    document.head.appendChild(script);
  }

  request(1);
}());
