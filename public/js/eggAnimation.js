$('#start-egg').addClass('animated shake');

setInterval(function(){
  $('#start-egg').removeClass('animated shake');
  setTimeout(function(){
    $('#start-egg').addClass('animated shake');
  }, 2000)
}, 3000)

