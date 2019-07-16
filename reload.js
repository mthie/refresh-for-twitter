function checkNewTweetsRefresh() {
  if(document.readyState != 'interactive') {
    let tags = document.querySelectorAll('*[aria-label^="new tweets" i]');
    for (let tag of tags) {
      var evt = document.createEvent('Events');
      evt.initEvent('click', true, false);
      tag.dispatchEvent(evt);
    }
  }
}

(function() {
  window.addEventListener('scroll', checkNewTweetsRefresh);
})();
