var Happiness = require('../../src/happiness.js');
var sharedBehaviourForNeeds = require('./needsSpec')

describe ('Happiness', function(){

  var happiness = new Happiness();

  beforeEach(function(){
    happiness.value = 10;
  });

  sharedBehaviourForNeeds(happiness)

});