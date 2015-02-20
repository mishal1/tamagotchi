var Tamagotchi = require('../../src/tamagotchi.js');

describe ('Tamagotchi', function(){

  var tamagotchi, happiness, tiredness, fullness, hunger;

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
    tamagotchi = new Tamagotchi(happiness, tiredness, fullness, hunger);
  });

  it('has object containing the needs', function(){
    expect(tamagotchi.needs).toEqual([happiness, tiredness, fullness, hunger])
  });

  it('has an age of 0', function(){
    expect(tamagotchi.age).toEqual(0)
  });

  it('can age', function(){
    tamagotchi.increaseAge()
    expect(tamagotchi.age).toEqual(1)
  });

  it('can set a name', function(){
    tamagotchi.setName('Mishal')
    expect(tamagotchi.name).toEqual('Mishal')
  });

  it('is alive when created', function(){
    expect(tamagotchi.alive).toEqual(true)
  });

  describe('over time the tamagotchis needs will change', function(){

    beforeEach(function(){
      tamagotchi.passageOfTime()
    });

    it('the tamagotchis happiness decreases', function(){
      expect(tamagotchi.needs[0].value).toEqual(4)
    });

    it('the tamagotchis tiredness increases', function(){
      expect(tamagotchi.needs[1].value).toEqual(8)
    });

    it('the tamagotchis fullness increases', function(){
      expect(tamagotchi.needs[2].value).toEqual(8)
    });

    it('the tamagotchis hunger increases', function(){
      expect(tamagotchi.needs[3].value).toEqual(8)
    });

  });

  describe('if the value for all needs are 0', function(){

    beforeEach(function(){
      happiness = {value: 0}
      tiredness = {value: 10}
      fullness = {value: 10}
      hunger = {value: 10}
      tamagotchi = new Tamagotchi(happiness, tiredness, fullness, hunger);
    });

    it('it will die', function(){
      tamagotchi.checkIfAlive()
      expect(tamagotchi.alive).toEqual(false)
    });

  });

});

