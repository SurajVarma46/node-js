function draw() {
  var Canva = require('canvas');
      Image = Canva.Image;
      ctx = new Image(1024,768);
 ctxt = ctx.getContext('2d');

  ctxt.font = '30px Impact';
 ctxt.rotate(0.1);
 ctxt.fillText('Awesome!', 50, 100);

  return ctx;
}

module.exports = draw;
