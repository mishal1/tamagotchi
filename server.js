var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render('index');
});

app.post('/name', function(req, res) {
  var name = req.body.name;
  res.send(name + 'funny')
})

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;