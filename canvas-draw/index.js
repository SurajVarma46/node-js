var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var path = require("path");
var draw = require("./draw.js");

var port = 3000;

app.use(bodyparser());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/download", function(req, res) {
  res.setHeader("Content-Type", "image/jpeg");
  draw(req.body.myText)
    .pngStream()
    .pipe(res);
});

app.listen(port, function() {
  console.log("Express server is listening on port:" + port);
});
