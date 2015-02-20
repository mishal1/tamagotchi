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

    it('the tamagotchis hunger decreases', function(){
      expect(user.tamagotchi.needs[3].value).toEqual(4)
    });

    it('the tamagotchis fullness increases', function(){
      expect(user.tamagotchi.needs[2].value).toEqual(8)
    });

  });

  describe('when a user plays with their tamagotchi', function(){

    beforeEach(function(){
      user.playWithTamagotchi()
    });

    it('the tamagotchis happiness increases', function(){
      expect(user.tamagotchi.needs[0].value).toEqual(8)
    });

    it('the tamagotchis tiredness increases', function(){
      expect(user.tamagotchi.needs[1].value).toEqual(8)
    });

  });

  it('when a user puts their tamagotchi to bed, the tamagotchis tiredness decreases', function(){
    user.putTamagotchiToBed()
    expect(user.tamagotchi.needs[1].value).toEqual(4)
  });

    it('when a user makes their tamagotchi poop, the tamagotchis fullness decreases', function(){
    user.makeTamagotchiPoop()
    expect(user.tamagotchi.needs[2].value).toEqual(4)
  });

});