(function () {
  var productionHost = "zhou-haiyang.github.io";
  var goatCounterEndpoint = "https://zhou-haiyang.goatcounter.com/count";
  var hasTrackedLinks = document.querySelector("[data-goatcounter-click]");

  if (!hasTrackedLinks || window.location.hostname.toLowerCase() !== productionHost) {
    return;
  }

  window.goatcounter = window.goatcounter || {};
  window.goatcounter.path = function () {
    return null;
  };

  var tracker = document.createElement("script");
  tracker.async = true;
  tracker.src = "https://gc.zgo.at/count.js";
  tracker.dataset.goatcounter = goatCounterEndpoint;
  document.head.appendChild(tracker);
}());