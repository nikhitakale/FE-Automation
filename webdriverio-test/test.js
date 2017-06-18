var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('http://mumbai.click.in/')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();