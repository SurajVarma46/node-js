var { createCanvas, loadImage } = require("canvas");
const height = 768;
const width = 1024;
const linewidth = 800;

function draw(text) {
	var {createCanvas, loadImage } = require('canvas');
	var canvas = createCanvas(width, height);
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0,width, height);
	ctx.font = "25px Impact";
	var meas = ctx.measureText(text);
 	ctx.fillStyle = "black";
	if(meas.width <=linewidth){
		ctx.fillText(text,112+(linewidth/2-(meas.width/2)),184);
	}
	loadImage('images/logo.png').then((image) => {
  		ctx.drawImage(image, 896, 10,128,128 );
		return canvas;
	}).catch(err => {
  		console.log('oh no!', err)
	})

  	//return canvas;
}

module.exports = draw;
