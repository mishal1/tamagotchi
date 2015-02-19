var Tiredness = require('../../src/tiredness.js');
var sharedBehaviourForNeeds = require('./needsSpec')

describe ('Tiredness', function(){

  var tiredness = new Tiredness();

  beforeEach(function(){
    tiredness.value = 10;
  });

  sharedBehaviourForNeeds(tiredness)

});