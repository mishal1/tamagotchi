var Tamagotchi = require('../../src/tamagotchi.js');

describe ('Tamagotchi', function(){

  var tamagotchi

  beforeEach(function(){
    tamagotchi = new Tamagotchi();
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

});

