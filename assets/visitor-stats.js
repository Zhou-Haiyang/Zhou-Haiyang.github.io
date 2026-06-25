(function () {
  var productionHost = "zhou-haiyang.github.io";
  var previewParam = "preview-stats";
  var statsBlocks = document.querySelectorAll("[data-visitor-stats]");
  var isProduction = window.location.hostname.toLowerCase() === productionHost;
  var showPreview = window.location.search.indexOf(previewParam) !== -1;

  if (!isProduction) {
    if (!showPreview) {
      for (var i = 0; i < statsBlocks.length; i += 1) {
        statsBlocks[i].hidden = true;
      }
    }
    return;
  }

  if (showPreview) {
    return;
  }

  var counter = document.createElement("script");
  counter.async = true;
  counter.src = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
  document.head.appendChild(counter);
}());