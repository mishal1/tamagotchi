$('#start-egg').addClass('animated shake');

var eggShaking = setInterval(continousEggShaking, 3000)

function continousEggShaking(){
  $('#start-egg').removeClass('animated shake');
  setTimeout(function(){
    $('#start-egg').addClass('animated shake');
  }, 1000)
}


$('#start-egg').click(function(){
  clearInterval(eggShaking)
  $('#start-egg').remove()
  $('.egg').append('<img src="/img/egg-crack1.svg"/>')
  var number = 2
  eggCrackingAnimation(number)
});

function eggCrackingAnimation(number){
  setTimeout(function(){
  console.log('hello')
  $('img').remove()
  $('.egg').append('<img src="/img/egg-crack'+ number +'.svg"/>')
  number += 1
  if(number < 14)eggCrackingAnimation(number)
}, 800)
}