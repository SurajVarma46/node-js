var { createCanvas, loadImage } = require("canvas");
const height = 768;
const width = 1024;
const linewidth = 800;
const lineheight = 30;

async function draw(text) {
	var {createCanvas, loadImage } = require('canvas');
	var canvas = createCanvas(width, height);
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0,width, height);
	ctx.font = "25px Impact";
 	ctx.fillStyle = "black";
	ctx.textAlign = 'center';
	wrapText(ctx, text, width/2, 280, linewidth, lineheight);
	const image = await loadImage('images/logo.png');
	ctx.drawImage(image, 936, 0,64,64 );
	return canvas;
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';
	var author = '--- '+'Author';
	var tags = 4;
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
	context.font = "italic 18pt Arial";
	context.fillStyle = "rgba(0,0,0,0.5)";
	context.fillText(author,width/2,y+lineheight+10);
	
	context.font = "18pt Arial";
	context.strokeStyle = "#000";
	context.lineWidth = 0.1;
	for (var i=0; i<tags; i++) {
   		context.beginPath();
   		context.fillStyle = "#e0e0e0";
   		context.rect(128 + (i * 100) + ((8-tags)*50) ,y + lineheight + 50 , 80, 30);
   		context.fill();
   		
		context.stroke();
	
   		context.fillStyle = "rgba(0,0,0,0.6)";
		context.font = "italic 14pt Arial";
   		context.fillText("tag", 168 + (i*100) + ((8-tags) * 50), y + lineheight + 70);
	}
}


module.exports = draw;
