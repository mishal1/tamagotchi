$('#start-egg').addClass('animated shake');

var eggShaking = setInterval(continousEggShaking, 3000)

function continousEggShaking(){
  $('#start-egg').removeClass('animated shake');
  setTimeout(function(){
    $('#start-egg').addClass('animated shake');
  }, 300)
}


$('#start-egg').click(function(){
  clearInterval(eggShaking)
  $('.egg-crack').remove()
  $('.egg').append('<img src="/img/egg-crack1.svg" class="egg-crack"/>')
  var number = 2
  eggCrackingAnimation(number)
});

function eggCrackingAnimation(number){
  setTimeout(function(){
    $('.egg').append('<img class="egg-crack" src="/img/egg-crack'+ number +'.svg"/>')
    number += 1
    if(number < 11){eggCrackingAnimation(number)}
    else {
      $('.egg-crack').remove()
      $('.egg').append('<img id="tamagotchi" src="/img/tamagotchi.png"/>')
      $('.egg').append('<img id="first-half" src="/img/first-half.svg"/>')
      $('.egg').append('<img id="second-half" src="/img/second-half.svg"/>')
      $('#first-half').addClass('rotateOutUpRight animated')
      $('#second-half').addClass('rotateOutDownRight animated')
      bounceDownElement('#greeting', hideHeader)
    }
  }, 300)
}

function bounceDownElement(text, callback){
  $(text).css('display','inline')
  $(text).addClass('bounceInDown animated')
  if(callback) callback(text) 
}

function hideHeader(text){
  setTimeout(function(){
    console.log('hide')
    $(text).hide()
    bounceDownElement('#ask-name', bounceUpInput)
  }, 1000)
}

function bounceUpInput(text){
  $('input').show()
  $('input').addClass('bounceInUp animated')
}
