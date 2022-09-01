
import $ from 'jquery'


function loadVideo() {
  window.YT.ready(function() {
    new window.YT.Player("player", {
      height: "390",
      width: "640",
      videoId: "M7lc1UVf-VE",
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
  });

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    var videoStatuses = Object.entries(window.YT.PlayerState)
    console.log(videoStatuses.find(status => status[1] === event.data)[0])
  }
}

$(document).ready(function() {
  $.getScript("https://www.youtube.com/iframe_api", function() {
    loadVideo();

  });
});
