var webdriverio = require('webdriverio');
var expect = require('chai').expect;

describe('Homepage', function() {

  var client = {};

  beforeEach(function(done) {
    client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'}   });
    client.init(done);
  });

  afterEach(function(done) {
    client.end(done);
  });

  it('displays egg',function(done) {
    client
      .url('http://localhost:3000')
      .isVisible('.egg')
      .call(done);
  });

  it('displays a greeting after hatching', function(done){
    this.timeout(8000);
    client
      .url('http://localhost:3000')
      .click('.egg')
      .waitForVisible('#greeting', 5000)
      .getText('#greeting', function(err, text){
          expect(text).to.equal('Hello!');
      })
    .call(done);
  });

  it('asks user to name their tamagotchi', function(done){
    this.timeout(8000);
    client
      .url('http://localhost:3000')
      .click('.egg')
      .waitForVisible('#ask-name', 5000)
      .getText('#ask-name', function(err, text){
          expect(text).to.equal('What do you want to name me?');
      })
    .call(done);
  });

  describe('when a user enters their name', function(){

    beforeEach(function(done){
      this.timeout(8000);
      client
        .url('http://localhost:3000')
        .click('.egg')
        .waitForVisible('#input', 5000)
        .pause(2000)
        .setValue('#input', 'mishal')
        .keys('\n')
        .waitForVisible('#right', 5000)
        .call(done);
    });

    it('their name is capitalized and displayed', function(done){
      this.timeout(8000);
      client
        .getText('#name', function(err, text){
          expect(text).to.equal('Mishal');
        })
      .call(done);
    });

    it('displays meters with a length of 60%', function(done){
      this.timeout(8000);
      var array = ['#happiness-meter', '#tiredness-meter','#fullness-meter','#hunger-meter'];
      array.forEach(function(id){
      client
        .getCssProperty(id, 'width', function(err, width){
          expect(width.value).to.equal('96.59375px');
        });
      });
      client.call(done);
    });

    describe('when a user feeds their tamagotchi', function(){

      it('the hunger meter decreases', function(done){
        this.timeout(8000);
        client
          .click('#eat')
          .getCssProperty('#hunger-meter', 'width', function(err, width){
            expect(width.value).to.equal('64.390625px');
          })
          .call(done);
      });

      it('the fullness meter increases', function(done){
        this.timeout(8000);
        client
          .click('#eat')
          .getCssProperty('#fullness-meter', 'width', function(err, width){
            expect(width.value).to.equal('128.796875px');
          })
          .call(done);
      });

    });

    describe('when a user plays with their tamagotchi', function(){
      
      it('the happiness meter increases', function(done){
        this.timeout(8000);
        client
          .click('#play')
          .getCssProperty('#happiness-meter', 'width', function(err, width){
            expect(width.value).to.equal('128.796875px');
          })
          .call(done);
      });

      it('the tiredness meter increases', function(done){
        this.timeout(8000);
        client
          .click('#play')
          .getCssProperty('#tiredness-meter', 'width', function(err, width){
            expect(width.value).to.equal('128.796875px');
          })
          .call(done);
      });

    });

    it('when a user puts their tamagotchi to bed, the tiredness meter decreases', function(done){
      this.timeout(8000);
      client
        .click('#sleep')
        .getCssProperty('#tiredness-meter', 'width', function(err, width){
          expect(width.value).to.equal('64.390625px');
        })
        .call(done);      
    });

    it('when a user makes their tamagotchi poop, the fullness meter decreases', function(done){
      this.timeout(8000);
      client
        .click('#poop')
        .getCssProperty('#fullness-meter', 'width', function(err, width){
          expect(width.value).to.equal('64.390625px');
        })
        .call(done); 
    });

  });

});