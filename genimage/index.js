var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var path = require("path");
var draw = require("./draw.js");

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
});

app.listen(port, function() {
  console.log("Express server is listening on port:" + port);
});
