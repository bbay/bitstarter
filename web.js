var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World2! How are you doing?');
});


var buf = new Buffer(fs.readFileSync('index.html', String));

console.log(buf.toString);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
