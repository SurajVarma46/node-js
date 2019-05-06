var { createCanvas, loadImage } = require("canvas");
const height = 768;
const width = 1024;
const linewidth = 800;

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
	ctx.fillText(text,width/2,300);
	const image = await loadImage('images/logo.png');
	ctx.drawImage(image, 936, 0,64,64 );
	return canvas;
}

module.exports = draw;
