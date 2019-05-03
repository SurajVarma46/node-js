var textToImage = require('text-to-image');
textToImage.generate('Sample Text').then(function (dataUri) {
  console.log(dataUri);
});
