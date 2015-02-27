function Need(){
  this.value = 6;
}

Need.prototype.decrease = function() {
  if(this.value > 0){this.value -= 2;}
};

Need.prototype.increase = function() {
  if(this.value < 10){this.value += 2;}
};

module.exports = Need;