$('input').focus(function(){
  $('input').keypress(function(key){
    if(key.which === 13){
      $.ajax({
        url: '/name',
        type: 'POST',
        data: {name: $('input').val()},
        success: function(data){
         startGame(data) 
        }
      })
    }
  });
})

function startGame(name){
  $('#ask-name').hide()
  $('input').hide()
  $('#buttons').show().addClass('bounceInUp animated')
  $('#needs').css('display','inline')
  $('#needs').addClass('bounceInDown animated')
  var capitalized = name.charAt(0).toUpperCase() + name.slice(1)
  $('#name').text(capitalized)
}

$('button').click(function(){
  $.ajax({
    url: '/pick',
    type: 'POST',
    data: {choice: $(this).data('pick')},
    success: function(data){
      updateMeters(data)
    }
  })
})

function updateMeters(data){
  $('#happiness-meter').css('width', data.happiness.toString() + '%')
  $('#tiredness-meter').css('width', data.tiredness.toString() + '%')
  $('#fullness-meter').css('width', data.fullness.toString() + '%')
  $('#hunger-meter').css('width', data.hunger.toString() + '%')
}