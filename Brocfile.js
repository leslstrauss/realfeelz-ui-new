/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// app.import('vendor/captcha/captcha.js');
app.import('bower_components/recaptcha-ajax/recaptcha_ajax.js');

// app.import('vendor/stickUp/stickUp.js');
//
app.import('bower_components/sticky-kit/jquery.sticky-kit.js');

// app.import('bower_components/foundation/js/foundation.js');
// app.import('bower_components/foundation/js/foundation/foundation.magellan.js');
// app.import('bower_components/foundation/js/foundation/foundation.topbar.js');
// app.import('bower_components/foundation/js/vendor/modernizr.js');
// app.i`mport('bower_components/foundation/js/vendor/fastclick.js');
// app.import('bower_components/foundation/js/vendor/jquery.cookie.js');
// app.import('bower_components/foundation/js/vendor/placeholder.js');

// app.import('bower_components/fullpage.js/jquery.fullPage.js');
// fullpage css incompatible with fullbackground page scrolling functionality
// app.import('bower_components/fullpage.js/jquery.fullPage.css');

// app.import('bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js');
// app.import('bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js');
// app.import('bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css');
// app.import('bower_components/jquery-mousewheel/jquery.mousewheel.js');
//
// app.import('bower_components/jquery-sticky/jquery.sticky.js');

// app.import('vendor/jquery-easy-ticker-master/jquery.easy-ticker.js');
// app.import('vendor/jquery-easy-ticker-master/test/jquery.easing.min.js');
//
// app.import('bower_components/flickerplate/js/flickerplate.js');
// app.import('bower_components/flickerplate/js/jquery-v1.10.2.js');
// app.import('bower_components/flickerplate/js/modernizr-custom-v2.7.1.js');
// app.import('bower_components/flickerplate/css/flickerplate.css');

// app.import('bower_components/onepage-scroll/jquery.onepage-scroll.js');
// app.import('bower_components/onepage-scroll/onepage-scroll.css');

module.exports = app.toTree()