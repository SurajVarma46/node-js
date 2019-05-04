var { createCanvas } = require("canvas");

function draw(text) {
  var canvas = createCanvas(1024, 768);
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 1024, 768);

  ctx.font = "30px Impact";
  //   ctx.rotate(0.1);
  ctx.fillStyle = "black";
  ctx.fillText(text, 50, 100);

  return canvas;
}

module.exports = draw;
