$(document).ready(function () {
  //Youtube API
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '460',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay,
      }
    }); 
  });

  function videoPlay(event) {
    event.target.playVideo();
  };

  var player;
});