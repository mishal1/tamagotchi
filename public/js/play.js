$('input').focus(function(){
  $('input').keypress(function(key){
    if(key.which === 13){
      $.ajax({
        url: '/name',
        type: 'POST',
        data: {name: $('input').val()},
        success: function(data){
          $('#ask-name').hide()
          $('input').hide()
          $('#buttons').show().addClass('bounceInUp animated')
          $('#needs').css('display','inline')
          $('#needs').addClass('bounceInDown animated')
          console.log(typeof data)
          var capitalized = data.charAt(0).toUpperCase() + data.slice(1)
          $('#name').text(capitalized)
        }
      })
    }
  });
})