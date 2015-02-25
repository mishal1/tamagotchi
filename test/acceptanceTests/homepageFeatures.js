describe('homepage', function(){

  before(function(){
    casper.start('http:localhost:3000/');
  });

  it('displays egg image when webpage starts', function(){
    casper.then(function(){
      '.egg'.should.be.inDOM.and.be.visible
    });
  });

  it('should not display the tamagotchi greeting before they hatch the egg', function(){
    casper.then(function(){
      '#greeting'.should.be.inDOM.and.not.be.visible
    });
  });

  it('should not ask the user to name their tamagotchi before they hatch their egg', function(){
    casper.then(function(){
      '#ask-name'.should.be.inDOM.and.not.be.visible
    });
  });

  it('should not show the input field before they hatch their egg', function(){
    casper.then(function(){
      'input'.should.be.inDOM.and.not.be.visible
    });
  });

  it('displays a greeting after hatching', function(){
    casper.then(function(){
      this.click('.egg-crack')
    });

    casper.waitUntilVisible('#greeting', function(){
      '#greeting'.should.be.visible
      console.log('working')
      expect('#greeting').to.contain.text('Hello!')
    }, function(){
      console.log('FAIL')
    }, 9000);

  });

  it('asks the user to name thier tamagotchi after they hatch their egg', function(){
    casper.start('http:localhost:3000/')
    casper.then(function(){
      this.click('.egg-crack')
    })

    casper.waitUntilVisible('#ask-name', function(){
      '#ask-name'.should.be.visible
      console.log('working')
      expect('#ask-name').to.contain.text('What do you want to name me?')
    }, function(){
      console.log('FAIL')
    }, 9000);

  });

  it('user can see input field to enter their tamagotchis name', function(){
    casper.start('http:localhost:3000/')
    casper.then(function(){
      this.click('.egg-crack')
    })

    casper.waitUntilVisible('input', function(){
      'input'.should.be.visible
      console.log('working')
    }, function(){
      console.log('FAIL')
    }, 9000);

  });

});