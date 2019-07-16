function checkNewTweetsRefresh() {
  if(document.readyState != 'interactive') {
    let tags = document.querySelectorAll('*[aria-label^="new tweets" i]');
    for (let tag of tags) {
      if (tag.hasAttribute("aria-hidden") && tag.getAttribute("aria-hidden") === "true") {
        continue;
      }

      var evt = document.createEvent('Events');
      evt.initEvent('click', true, false);
      tag.dispatchEvent(evt);
    }
  }
}

(function() {
  console.log("Refresh for Twitter started");
  window.addEventListener('scroll', checkNewTweetsRefresh);
})();
