/* jshint ignore:start */

define('realfeelz-ui/config/environment', ['ember'], function(Ember) {
  var prefix = 'realfeelz-ui';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */


});

if (runningTests) {
  require("realfeelz-ui/tests/test-helper");
} else {
  require("realfeelz-ui/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}


/* jshint ignore:end */
