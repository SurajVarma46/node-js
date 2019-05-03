var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser());
var path = require('path');
const port = 80;
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/', function(req, res) {
 x=req.body.myText;
var textToImage = require('text-to-image');
textToImage.generate(x).then(function (dataUri) {
  
	let base64Image = x.split(';base64,').pop();
	var fs = require('fs');
	fs.writeFile('image.png', base64Image, {encoding: 'base64'}, function(err) {
    	console.log('File created');
});
});
});
app.listen(port);
console.log('Listening to port 80');

