var Need = require('./needs.js');

function Happiness(){}

Happiness.prototype = new Need();

module.exports = Happiness;