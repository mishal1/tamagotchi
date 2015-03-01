$('#eat').click(eatApple);

function eatApple(){
  var tamagotchi = document.getElementById('tamagotchi')
  tamagotchi.src = '/img/tamagotchi-eat.svg'
  $('body').append('<img id="apple" src="/img/eat-button.png"/>')
  moveApple()
}

function moveApple(){
  var position = -550
  var eat = setInterval(function(){
    if(position === -325){ 
      clearInterval(eat)
      $('#apple').remove()
      tamagotchi.src = '/img/tamagotchi.png'
    }
    var string = position.toString()
    $('#apple').css('top', string + 'px')
    position += 25
  }, 150)
}

function applePosition(){

}

$('#play').click(ballMovingDown);

function ballMovingDown(){
  $('body').append('<img id="ball" src="/img/play-button.png"/>')
  var top = -550
  var left = 200
  var firstPlay = setInterval(function(){
    if(top === -440){
      var tamagotchi = document.getElementById('tamagotchi')
      tamagotchi.src = '/img/tamagotchi-play.svg'
      clearInterval(firstPlay)
      ballMovingUp(top, left)
    }
    var string = top.toString()
    $('#ball').css('top', string + 'px')
    top += 11
    var string = left.toString()
    $('#ball').css('left', string + 'px')
    left += 18
  }, 150)
}

function ballMovingUp(top, left){
  setTimeout(function(){
    var tamagotchi = document.getElementById('tamagotchi')
    tamagotchi.src = '/img/tamagotchi.png'
  },250)  
  var secondPlay = setInterval(function(){
    if(top === -550){
      clearInterval(secondPlay)
      $('#ball').remove()
    }
    var string = top.toString()
    $('#ball').css('top', string + 'px')
    top -= 11
    var string = left.toString()
    $('#ball').css('left', string + 'px')
    left += 18
  }, 150)
}

