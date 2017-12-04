var nextVideo;
var videos = [
  {
    id: '_lKQtSJ1zvQ',
    start: undefined,
    end: undefined
  },
  {
    id: 'Cjqq_GfX9aM',
    start: 6,
    end: 9
  },
  {
    id: '8j3LMfQ5CRA',
    start: 178,
    end: 188
  },
  {
    id: 'Kwc5W0vUOiY',
    start: undefined,
    end: undefined
  },
  {
    id: 'nB_SRzxPADc',
    start: undefined,
    end: undefined
  },
  {
    id: 'DV2QJOTfFBA',
    start: undefined,
    end: undefined
  },
  {
    id: 'hBxxPMsjOEI',
    start: 17,
    end: undefined
  },
  {
    id: '5HfBEex0dVI',
    start: 45,
    end: 54
  },
  {
    id: 'zRqBpD8M72g',
    start: undefined,
    end: undefined
  },
  {
    id: 'eJz-WsDSA0g',
    start: undefined,
    end: undefined
  },
  {
    id: 'NbDlICh_opI',
    start: undefined,
    end: undefined
  },
  {
    id: 'bCJDPd15n0A',
    start: undefined,
    end: undefined
  },
  {
    id: 'Q3-c5DBJX7A',
    start: 0,
    end: 20
  },
  {
    id: '2RG-96tUEFI',
    start: 0,
    end: 10
  },
  {
    id: 'SQZW6Jp5R1A',
    start: undefined,
    end: undefined
  },
  {
    id: 'vv5MSkv_2aU',
    start: undefined,
    end: undefined
  },
  {
    id: 'kaipkcHAyz4',
    start: 17,
    end: 30
  },
  {
    id: 'jNzcZuVgJUE',
    start: undefined,
    end: undefined
  },
  {
    id: 'j89dPK8f5O8',
    start: 37,
    end: 68
  },
  {
    id: 'KxKFPo4kHAY',
    start: 6,
    end: 22
  },
  {
    id: 'cT60hzTw5cI',
    start: 0,
    end: 8
  },
  {
    id: '70l82hvMHuk',
    start: undefined,
    end: undefined
  },
  {
    id: 'M4Hd1wGc90w',
    start: undefined,
    end: undefined
  },
  {
    id: 'lNpIzrGZ5Ow',
    start: 90,
    end: 119
  },
  {
    id: '3lVy5HyjkCc',
    start: 90,
    end: 110
  },
  {
    id: 'zXV_G-gVe3o',
    start: 7,
    end: 23
  },
  {
    id: 'bhcBumttI-0',
    start: 0,
    end: 20
  },
  {
    id: 'Y3mdCbcSqIM',
    start: 15,
    end: 32
  },
  {
    id: 'QWdQU-LLc-E',
    start: undefined,
    end: undefined
  },
  {
    id: 'HmAHAGy-y9A',
    start: 45,
    end:74
  },
  {
    id: 'VZv78p348z8',
    start: 21,
    end: 40
  },
  {
    id: 'jZOwZdltv6A',
    start: 165,
    end: 206
  },
  {
    id: 'Q8qtBJ22j-I',
    start: undefined,
    end: undefined
  },
  {
    id: '_1gWz0ea79c',
    start: 5,
    end: 18
  },
  {
    id: '7dRmG1aYNUY',
    start: 30,
    end: 45
  },
  {
    id: 'YDliU-WhYAU',
    start: 0,
    end: 12
  },
  {
    id: 'iW5uiMRJ3Fc',
    start: undefined,
    end: undefined
  },
  {
    id: 'd2SnRV00eBY',
    start: 5,
    end: 45
  },
  {
    id: '82LzxhphnVA',
    start: 27,
    end: 57
  },
  {
    id: 'jL73xcc-DX0',
    start: undefined,
    end: undefined
  },
  {
    id: '6TkBUrE3xSI',
    start: 61,
    end: 94
  },
  {
    id: 'HMXhqe1Rozk',
    start: 57,
    end: 78
  },
  {
    id: 'dKYRqtTdkR0',
    start: undefined,
    end: undefined
  },
  {
    id: 's3hx1h-k_G0',
    start: undefined,
    end: undefined
  },
  {
    id: 'hPLpL3bD-ks',
    start: 42,
    end: 54
  },
  {
    id: 'H-Xohm7Bxls',
    start: undefined,
    end: undefined
  },
  {
    id: '8F5c5ziujSc',
    start: undefined,
    end: undefined
  },
  {
    id: '2XClzdPbWG8',
    start: 21,
    end: 46
  },
  {
    id: 'QAvgh9I1rvk',
    start: 26,
    end: 50
  },
  {
    id: 'a8Y1w1w_kFM',
    start: 27,
    end: 59
  },
  {
    id: 'UaDhVHBD_zQ',
    start: undefined,
    end: undefined
  },
  {
    id: 'OlZgGAmw2bY',
    start: 11,
    end: 24
  },
  {
    id: '4Hkp_XG8DX4',
    start: undefined,
    end: undefined
  },
  {
    id: 'Xr9p_2hB7qM',
    start: undefined,
    end: undefined
  },
  {
    id: '1mjo-4UNUDg',
    start: 14,
    end: 30
  },
  {
    id: 'pK79kwsVw1I',
    start: undefined,
    end: undefined
  },
  {
    id: 'UXp5O3-xYrE',
    start: undefined,
    end: undefined
  },
  {
    id: 'wwGlUIB82Jc',
    start: 0, 
    end: 13
  },
  {
    id: 'jC4fACdh3S4',
    start: 0,
    end: 10
  },
  {
    id: 'DkXyeMIcKhU',
    start: 0,
    end: 7
  },
  {
    id: 'mLvMJIsMagY',
    start: 0,
    end: 10
  },
  {
    id: '-JoLThZsOTY',
    start: 0, 
    end: 11
  },
  {
    id: 'V1FnT7MD2cw',
    start: 0,
    end: 26
  },
  {
    id: 'ABTGPJhwL0Q',
    start: undefined,
    end: undefined
  },
  {
    id: 'dKOfosKo7hA',
    start: 24,
    end: 38
  },
  {
    id: '5ZlAIt-53y8',
    start: undefined,
    end: undefined
  },
  {
    id: 'HaWuCjLqtFA',
    start: 70,
    end: 92
  },
  {
    id: 'gZDnaDr0CBg',
    start: 14,
    end: 29
  },
  {
    id: '1X8k1aT4Cnk',
    start: 0,
    end: 18
  },
  {
    id: 'riEtKGX1D-U',
    start: 29,
    end: 53
  },
  {
    id: 'O2ZPVUO1P9A',
    start: undefined,
    end: undefined
  },
  {
    id: 'LpS5qi198v0',
    start: undefined,
    end: undefined
  },
  {
    id: '4dtwZoSIFzs',
    start: undefined,
    end: undefined
  },
  {
    id: 'xll18oDkzhU',
    start: 0,
    end: 25
  },
  {
    id: 'xDtkKESEwLA',
    start: 0,
    end: 15
  },
  {
    id: '03RkfQtv5Ls',
    start: 108,
    end: 141
  },
  {
    id: 'nETugM1lswc',
    start: 2,
    end: 10
  },
  {
    id: 'xohCm3cBJA4',
    start: undefined,
    end: undefined
  },
  {
    id: 'G5mR-y5vcQw',
    start: undefined,
    end: undefined
  },
  {
    id: 'B9rKE2QCu58',
    start: 9,
    end: 30
  },
  {
    id: 'cuDggqgwg',
    start: 2,
    end: 20
  },
  {
    id: 'kcI4r0DERMM',
    start: 0,
    end: 11
  },
  {
    id: 'oc3UKwYaLNU',
    start: 9,
    end: 47
  },
  {
    id: 'nfjLZE6Pp5U',
    start: undefined,
    end: undefined
  },
  {
    id: 'J-nCdSqwJZE',
    start: 0,
    end: 21
  },
  {
    id: '_OUJqXd5FrQ',
    start: undefined,
    end: undefined
  },
  {
    id: 'Mqhw_GXgqYY',
    start: 9,
    end: 37
  },
  {
    id: 'zznhFx8aKwo',
    start: 0,
    end: 19
  },
  {
    id: 'z5J4O45YPlI',
    start: undefined,
    end: undefined
  },
  {
    id: '-o2SoDmIlrI',
    start: undefined,
    end: undefined
  },
  {
    id: '7Y2eRZ53feQ',
    start: 15,
    end: 39
  },
  {
    id: 'BcgZGNu_vkY',
    start: 95,
    end: 121
  },
  {
    id: 'HFq_2NeaQn0',
    start: 144,
    end: 167
  },
  {
    id: 'sT_7sWApztY',
    start: 29,
    end: 53
  },
  {
    id: 'u1UOAdFq5aY',
    start: 30,
    end: 55
  },
  {
    id: '0F0OHpEuNUQ',
    start: 23,
    end: undefined
  },
  {
    id: 'JhHe57Dn5Rc',
    start: undefined,
    end: undefined
  },
  {
    id: 'krb-TPxXj4Y',
    start: undefined,
    end: undefined
  },
  {
    id: 'YnzewVuONBs',
    start: undefined,
    end: undefined
  },
  {
    id: 'sg9cWg2g0y8',
    start: undefined,
    end: undefined
  },
  {
    id: 'Z9zoQj4moo4',
    start: undefined,
    end: undefined
  },
  {
    id: 'uYlI7Mymb7U',
    start: undefined,
    end: undefined
  },
  {
    id: 'nOQIqwWgy9A',
    start: 0,
    end: 19
  },
  {
    id: 'Knc8RpJg8b8',
    start: 0,
    end: 13
  },
  {
    id: '2w4fFn5EPms',
    start: 0,
    end: 52
  },
  {
    id: 'FjoJZbyNy9g',
    start: 43,
    end: 61
  },
  {
    id: 'BeYspXO8Ey8',
    start: 0,
    end: 46
  },
  {
    id: 'Ekp7DY1xGzg',
    start: 36,
    end: 70
  },
  {
    id: 'crekEen3HvM',
    start: 20,
    end: 46
  },
  {
    id: 'mCCgmY0N5sc',
    start: 0,
    end: 14
  },
  {
    id: 'vIOfclFzSZY',
    start: 30,
    end: 44
  },
  {
    id: '6s9XPu-RT8I',
    start: 76,
    end: 103
  },
  {
    id: 'VPfcBuvhF_g',
    start: 0,
    end: 15
  },
  {
    id: '_2irWjQo52g',
    start: undefined,
    end: undefined
  },
  {
    id: 'EdBLhKMGsx0',
    start: 30,
    end: 55
  },
  {
    id: '3MQOQ4qy9_I',
    start: 29,
    end: 39
  },
  {
    id: 'Y-fDlHegYo8',
    start: 0,
    end: 14
  },
  {
    id: 'cLqnR7uAcnc',
    start: 27,
    end: 36
  },
  {
    id: 'xBKA5k9Y-0g',
    start: 42,
    end: 50
  },
  {
    id: 'CsuCtEAj5_k',
    start: 42,
    end: 63
  },
  {
    id: 'sW0DNuGR4sc',
    start: undefined,
    end: undefined
  },
  {
    id: '-A8YxuIwzCo',
    start: 0,
    end: 18
  },
  {
    id: 'tl7-QWXdV6A',
    start: 13,
    end: 28
  },
  {
    id: 'NEOQkyf5zUk',
    start: 300,
    end: 330
  },
  {
    id: 'Uix_CvxNWNM',
    start: 0,
    end: 14
  },
  {
    id: '3UFuOUqHFJU',
    start: 1370,
    end: 1389
  },
  {
    id: 'L6OMSjpGXkg',
    start: 14,
    end: 29
  },
  {
    id: 'KjbVM06OTQY',
    start: undefined,
    end: undefined
  },
  {
    id: 'UMKuFqB3RwA',
    start: 15,
    end: 26
  },
  {
    id: '6cPrEwhESoA',
    start: 94,
    end: 118
  }
];

// var thumbnailUrl = 'https://i.ytimg.com/vi/' + id + '/mqdefault.jpg';
// var example embed = 'https://www.youtube.com/embed/8j3LMfQ5CRA?start=178&end=188';

$( document ).ready(function() {

  var player;
  window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      playerVars: {
        modestbranding: 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
        'onError': onPlayerError
      }
    });
  };
  
  // Randomize the videos
  videos.sort(function(a, b) {
    return 0.5 - Math.random();
  });
  
  var areAnyDuplicates = false;

  videos.map(function(obj) {
      return obj.id;
  }).forEach(function (element, index, arr) {
      if (arr.indexOf(element) !== index) {
          areAnyDuplicates = true;
      }
  });
  
  // console.log(areAnyDuplicates);
  
  videos.forEach(function(object) {
    object.thumbnailUrl = 'https://i.ytimg.com/vi/' + object.id + '/mqdefault.jpg';
    object.videoUrl = 'https://www.youtube.com/embed/' + object.id + '?enablejsapi=1&showinfo=0&rel=0'; //?rel=0&amp;controls=0&amp;autoplay=1&amp;showinfo=0';  
    if (object.start !== undefined) {
      object.videoUrl += ('&amp;start=' + object.start);
    }
    if (object.end !== undefined) {
      object.videoUrl += ('&amp;end=' + object.end);
    }
  });

  var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  function onPlayerReady(event) {
    document.getElementById('player').style.borderColor = '#FF6D00';
    
    // Cue the first video;
    player.cueVideoById({'videoId': videos[0].id,
           'startSeconds': videos[0].start,
           'endSeconds': videos[0].end
         });
    $('#' + videos[0].id).addClass('glow');
    nextVideo = videos[1].id;
  }
  
  // On error (video deleted), play next
  function onPlayerError() {
    playCurrentVideo(nextVideo);
  }
  
  function changeBorderColor(playerStatus) {
    var color;
    if (playerStatus == -1) {
      color = "#000"; // unstarted = black
    } else if (playerStatus == 0) {
      color = "#000"; // ended = yellow
    } else if (playerStatus == 1) {
      color = "#000"; // playing = green
    } else if (playerStatus == 2) {
      color = "#DD2C00"; // paused = red
    } else if (playerStatus == 3) {
      color = "#000"; // buffering = purple
    } else if (playerStatus == 5) {
      color = "#000"; // video cued = orange
    }
    if (color) {
      document.getElementById('player').style.borderColor = color;
    }
  }
  
  function onPlayerStateChange(event) {
    changeBorderColor(event.data);
    
    if (event.data === 0) {
      playCurrentVideo(nextVideo);
    }
  }
  
  // ----------
  function playCurrentVideo(id) {
    for (i = 0; i < videos.length; i++) {
      if (videos[i].id === id) {
        var start = videos[i].start;
        var end = videos[i].end;
        player.loadVideoById({'videoId': id,
               'startSeconds': start,
               'endSeconds': end
             });             
        $('.thumbnail').removeClass('glow');
        $('#' + id).addClass('glow');
        nextVideo = videos[i + 1].id;
      }
    }    
  }
  
  $('#nextbtn').on('click', function() {
    playCurrentVideo(nextVideo);
  });
  
  // Make thumbnails
  // videos.forEach(function(object) {
  //   $('.wrapper').append('<div class="thumbnail" id="' + object.id + '"><img src="' + object.thumbnailUrl + '"</div>');
  // });
  //     
  // $('.thumbnail').on('click', function() {
  //   playCurrentVideo(this.id);
  //   $('.thumbnail').removeClass('glow');
  //   $(this).addClass('glow');
  // });
  
}); //End ready

// To do:
// - change origin... to github? to starwars.video? Maybe ask 
// - add meta data descriptions
// - style better... new ship! add ottom line to SVG
// add holographic projection
// add list of all videos ... modal? 
// - clean up code... i-frame-demo?

// timing wrong on star wars bottle flip, ends too late
// first go at projector lights okay, next try chopping up a triangle
