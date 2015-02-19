var Hunger = require('../../src/hunger.js');
var sharedBehaviourForNeeds = require('./needsSpec')

describe ('Hunger', function(){

  var hunger = new Hunger();

  beforeEach(function(){
    hunger.value = 10;
  });

  sharedBehaviourForNeeds(hunger)

});