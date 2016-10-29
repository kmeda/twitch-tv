

var channelArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getAllChannels(){
  channelArr.forEach(function(channel){
    $.getJSON("https://wind-bow.hyperdev.space/twitch-api/streams/"+channel+"?callback=?", function(stream){
      var channelStatus;
      if (stream.stream == null){
        channelStatus = "offline";
      }
      else if(stream.stream == undefined) {
        channelStatus = "Account Closed";
      }
      else {
        channelStatus = stream.stream.channel.status;
      }

      $.getJSON("https://wind-bow.hyperdev.space/twitch-api/channels/"+channel+"?callback=?", function(channel){
          channelName = channel.display_name;
          channelLogo = channel.logo;
          channelURL = channel.url;
          var channelHTML = '<div class="channel"><div class="logo" \
                            style="background:url('+channelLogo+') no-repeat center center; background-size: cover;">\
                            </div><div class="stream"><a href='+channelURL+'><div class="name">'+channelName+'</div>\
                            </a><div class="status">'+channelStatus+'</div></div></div>'
          $('.channel-block').append(channelHTML);
      });
    });
  });
}

$(document).ready(function(){

  getAllChannels();

  $('.all').on('click', function(){
    $('.channel-block').empty();
    getAllChannels();
  });


  $('.online').on('click', function(){



  });

  $('.offline').on('click', function(){
    if($('.status').val() != 'offline'){
      $('.channel').hide();
    }


  });




});



/*

stream - null
       - status
       - display_name
       - logo
       - url
       -


       $('.online').on('click', function(){});

       $('.offline').on('click', function(){});



*/
