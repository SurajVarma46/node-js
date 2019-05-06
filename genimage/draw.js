var { createCanvas, loadImage } = require("canvas");
const height = 768;
const width = 1024;
const linewidth = 800;
const lineheight = 40;

async function draw(text) {
	var {createCanvas, loadImage } = require('canvas');
	var canvas = createCanvas(width, height);
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0,width, height);
	ctx.font = "25px Impact";
//	var meas = ctx.measureText(text);
 	ctx.fillStyle = "black";
	ctx.textAlign = 'center';
	wrapText(ctx, text, width/2, 300, linewidth, lineheight);
	//	ctx.fillText(text,width/2,300);
	const image = await loadImage('images/logo.png');
	ctx.drawImage(image, 936, 0,64,64 );
	return canvas;
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }

module.exports = draw;
