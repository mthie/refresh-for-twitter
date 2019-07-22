var previousTweets = 0;
var firstTweet = null;
var inView = true;

function checkNewTweetsRefresh() {
  if(document.readyState != 'interactive') {
    let tags = document.querySelectorAll("div[aria-label^='timeline' i]>div:first-child>div:first-child");
    if (tags.length < 1) {
      return;
    }
    let firstTag = tags[0].firstChild;

    inView = true
    let stillInList = false
    for (let node of tags[0].children) {
      if (node == firstTweet) { stillInList = true }
    }
    if (!stillInList) {
      firstTweet = tags[0].firstChild;
    }

    if (window.pageYOffset == 0) {
      firstTweet = tags[0].firstChild;
    }

    if (firstTweet !== null) {
      let tweetBounding = firstTweet.getBoundingClientRect();
      if (tweetBounding.top < 0 ||
          tweetBounding.bottom > window.innerHeight) {
        inView = false
      }
    }

    if (firstTweet != firstTag && inView) {
      firstTweet = firstTag
      window.scrollTo(0, 0)
    }
  }
}

(function() {
  console.log("Refresh for Twitter started");
  window.addEventListener('scroll', checkNewTweetsRefresh);
})();
