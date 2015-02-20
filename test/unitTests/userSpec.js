var User = require('../../src/user.js');

describe ('User', function(){

  var user, happiness, tiredness, fullness, hunger;

  beforeEach(function(){
    happiness = {
      value: 6, 
      increase: function(){this.value += 2}, 
      decrease: function(){this.value -= 2}
    }
    tiredness = {
      value: 6, 
      increase: function(){this.value += 2}, 
      decrease: function(){this.value -= 2}
    }
    fullness = {
      value: 6, 
      increase: function(){this.value += 2}, 
      decrease: function(){this.value -= 2}
    }
    hunger = {
      value: 6, 
      increase: function(){this.value += 2}, 
      decrease: function(){this.value -= 2}
    }
    tamagotchi = {needs: [happiness, tiredness, fullness, hunger]}
    user = new User();
    user.hatch(tamagotchi)
  });

  it('can hatch the egg', function(){
    expect(user.tamagotchi).toEqual(tamagotchi)
  });

  describe('when a user feeds their tamagotchi', function(){

    beforeEach(function(){
      user.feedTamagotchi()
    });

    it('their hunger decreases', function(){
      expect(user.tamagotchi.needs[3].value).toEqual(4)
    });

    it('their fullness increases', function(){
      expect(user.tamagotchi.needs[2].value).toEqual(8)
    });

  });

});