var Tamagotchi = require('../../src/tamagotchi.js');

describe ('Tamagotchi', function(){

  var tamagotchi, happiness, tiredness, fullness, hunger;

  beforeEach(function(){
    happiness = {value: 0}
    tiredness = {value: 10}
    fullness = {value: 10}
    hunger = {value: 10}
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

  describe('if the value for all needs are 0', function(){

    it('it will die', function(){
      tamagotchi.checkIfAlive()
      expect(tamagotchi.alive).toEqual(false)
    });

  });

});

