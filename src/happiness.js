var Need = require('./needs');

function Happiness(){}

Happiness.prototype = new Need();

module.exports = Happiness;