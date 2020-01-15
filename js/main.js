$(document).ready(function () {
  //Youtube API
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '460',
      width: '100%',
      videoId: 'icOCoyI4LcU',
      events: {
        'onReady': videoPlay,
      }
    }); 
  });

  function videoPlay(event) {
    event.target.playVideo();
  };

  var player;

  // Вкладки с картами
  $(".branches__tabs-map .tab").click(function() {
    $(".branches__tabs-map .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  $(".tab_item").not(":first").hide();
});