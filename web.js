var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

	fs.readFileSync('./index.html', function(err, data) {
		if (err) {
			response.send("Error while reading file");
		} else {
			response.send(data.toString('utf8',0,data.length));
		}
	});

	/*  response.send('Hello World 2!'); */
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
