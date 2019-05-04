var express = require('express');
var app = express();
var router = express.Router();
var draw = require('../lib/draw_badge.js');
var bodyparser = require('body-parser');
const port = 80;
app.use(bodyparser());
var path = require('path');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
	});

app.post('/', function (req, res, next) {
	
  res.setHeader('Content-Type', 'image/png');
  draw().pngStream().pipe(res);
});

module.exports = router;
/*app.post('/', function(req, res) {
	var x=req.body.myText;
	var textToImage = require('text-to-image');
	textToImage.generate(x,{
			debug:true,
			maxWidth:1024,
			margin:20,
		}).then(function (dataUri) {
		
 			let x = dataUri.split(';base64,').pop();
			var fs = require('fs');
			fs.writeFile('Image.png', x, {encoding: 'base64'}, function(err) {
					res.sendFile(path.join(__dirname+'/Image.png'));
				});
			});
		});
*/
app.listen(port);
console.log('Listening to port 80');

