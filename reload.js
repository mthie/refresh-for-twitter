function checkNewTweetsRefresh() {
  if(document.readyState != 'interactive') {
    let tags = document.querySelectorAll('*[aria-label^="new tweets" i]');
    for (let tag of tags) {
      if (tag.hasAttribute("aria-hidden") && tag.getAttribute("aria-hidden") === "true") {
        continue;
      }

      console.log("New tweets found", tag);
      var evt = document.createEvent('Events');
      evt.initEvent('click', true, false);
      tag.firstChild.dispatchEvent(evt);
      window.setTimeout(function() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 600);
    }
  }
}

(function() {
  console.log("Refresh for Twitter started");
  window.addEventListener('scroll', checkNewTweetsRefresh);
})();
