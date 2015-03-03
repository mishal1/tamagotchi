$('#eat').click(eatApple);

function eatApple(){
  var tamagotchi = document.getElementById('tamagotchi');
  tamagotchi.src = '/img/tamagotchi-eat.svg';
  $('.egg').append('<img id="apple" src="/img/eat-button.png"/>');
  moveApple();
}

function moveApple(){
  var position = 0;
  var eat = setInterval(function(){
    if(position === 190){ 
      clearInterval(eat);
      $('#apple').remove();
      tamagotchi.src = '/img/tamagotchi.png';
    }
    var string = position.toString();
    $('#apple').css('top', string + 'px');
    position += 19;
  }, 150)
}

$('#play').click(ballMovingDown);

function ballMovingDown(){
  $('.egg').append('<img id="ball" src="/img/play-button.png"/>')
  var top = -10;
  var left = -30;
  var firstPlay = setInterval(function(){
    if(top === 60){
      var tamagotchi = document.getElementById('tamagotchi');
      tamagotchi.src = '/img/tamagotchi-play.svg';
      clearInterval(firstPlay);
      ballMovingUp(top, left);
    };
    var string = top.toString();
    $('#ball').css('top', string + 'px');
    top += 7;
    var string = left.toString();
    $('#ball').css('left', string + 'px');
    left += 17;
  }, 100)
}

function ballMovingUp(top, left){
  setTimeout(function(){
    var tamagotchi = document.getElementById('tamagotchi');
    tamagotchi.src = '/img/tamagotchi.png';
  },150)  
  var secondPlay = setInterval(function(){
    if(top === -10){
      clearInterval(secondPlay);
      $('#ball').remove();
    };
    var string = top.toString();
    $('#ball').css('top', string + 'px');
    top -= 7;
    var string = left.toString();
    $('#ball').css('left', string + 'px');
    left += 17;
  }, 100)
}

$('#poop').click(poop);

function poop(){
  var tamagotchi = document.getElementById('tamagotchi');
  tamagotchi.src = '/img/tamagotchi-poop.svg';
  rollingPoop();
}

function rollingPoop(){
  setTimeout(function(){
    $('.egg').append('<img id="poop-emoji" src="/img/poop-button.jpg"/>');
    $('#poop-emoji').addClass('fadeIn animated');
      setTimeout(function(){
        $('#poop-emoji').addClass('rollOut animated');
        var tamagotchi = document.getElementById('tamagotchi');
        tamagotchi.src = '/img/tamagotchi.png';
        setTimeout(function(){
          $('#poop-emoji').remove();
        }, 1000)
    }, 1000)
  }, 300)
}

$('#sleep').click(function(){
  var tamagotchi = document.getElementById('tamagotchi');
  tamagotchi.src = '/img/tamagotchi-sleep.svg';
  setTimeout(function(){
    $('.egg').append('<img id="sleep-emoji" src="/img/sleep-button.svg"/>');
    $('#sleep-emoji').addClass('fadeIn animated');
    setTimeout(function(){
      $('#sleep-emoji').addClass('fadeOut animated');
      setTimeout(function(){
        var tamagotchi = document.getElementById('tamagotchi');
        tamagotchi.src = '/img/tamagotchi.png';
        $('#sleep-emoji').remove();
      }, 1000)
    }, 1500)
  }, 800)
})

