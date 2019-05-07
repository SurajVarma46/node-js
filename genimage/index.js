var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var path = require("path");
var draw = require("./draw.js");
var fs = require('fs');
var request = require('request');
var port = 80;

app.use(bodyparser());
app.use(express.static(path.join(__dirname,'images')));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/download",async function(req, res) {
  res.setHeader("Content-Type", "image/jpeg");
	const img = await draw(req.body.myText);
	
    img.pngStream()
    .pipe(res);
/*	
var fs = require('fs'),
    request = require('request');

var download =async function(uri, filename, callback){
  request.head(uri, async function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

   await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
  console.log('done');
});
*/
});

app.listen(port, function() {
  console.log("Express server is listening on port:" + port);
});
