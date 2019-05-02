var phantom = require('phantom');   

phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {
        page.open("http://www.gmail.com").then(function(status) {
            page.render('gmail.pdf').then(function() {
                console.log('Page Rendered');
                ph.exit();
            });
        });
    });
});