eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"realfeelz-ui/adapters/application\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.RESTAdapter.extend({\n      namespace: \'api\',\n      host: \'https://realfeelz-server.herokuapp.com\'\n    });\n  });//# sourceURL=realfeelz-ui/adapters/application.js");

;eval("define(\"realfeelz-ui/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"realfeelz-ui/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=realfeelz-ui/app.js");

;eval("define(\"realfeelz-ui/controllers/application\", \n  [\"ember\",\"realfeelz-ui/utils/captcha\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var CaptchaUtil = __dependency2__[\"default\"];\n\n    __exports__[\"default\"] = Ember.ArrayController.extend({\n      actions: {\n        postStatement: function(newPost) {\n          var self = this;\n          var bubbleState;\n          var tryAgain = false;\n\n          if (self.get(\'captchaVerified\')) {\n            bubbleState = true;\n          }\n          else if (self.get(\'captchaVisible\')) {\n            if (!self.get(\'verifyingCaptcha\')) {\n              // Calls the verify function\n              self.set(\'tryAgain\', false);\n              self.set(\'verifyingCaptcha\', true);\n              CaptchaUtil.verify().then(function(result) {\n                self.set(\'verifyingCaptcha\', false);\n                var verified = result.verified;\n\n                if (verified === true) {\n                  // Submits the statement after captcha verification returns true.\n                  self.set(\'tryAgain\', false);\n                  self.set(\'captchaVerified\', true);\n                  CaptchaUtil.destroy();\n                  self.set(\'captchaVisible\', false);\n                  self.send(\'postStatement\', newPost);\n                } else {\n                  // Makes a call to display a new captcha if verification returns false.\n                  self.set(\'showingCaptcha\', true);\n                  CaptchaUtil.show().then(function() {\n                    tryAgain = true;\n                    self.set(\'showingCaptcha\', false);\n                    self.set(\'tryAgain\', tryAgain);\n                    self.set(\'captchaVerified\', false);\n                    self.set(\'captchaVisible\', true);\n                  });\n                }\n              });\n            }\n            bubbleState = false;\n          }\n          else {\n            // Calls the show function to display the Captcha.\n            CaptchaUtil.show().then(function() {\n              self.set(\'captchaVisible\', true);\n            });\n            bubbleState = false;\n          }\n\n          return bubbleState;\n        }\n      }\n    });\n  });//# sourceURL=realfeelz-ui/controllers/application.js");

;eval("define(\"realfeelz-ui/utils/captcha\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    var CaptchaUtil = {\n      pubKey: \'6Ld0jv0SAAAAAFU12E2rtRlu76Pe1uCRR0msmVsX\',\n      url: \'https://www.google.com/recaptcha/api/verify\'\n    };\n\n    CaptchaUtil.show = function() {\n      return new Ember.RSVP.Promise(function(resolve, reject) {\n        Recaptcha.create(CaptchaUtil.pubKey, \'recaptcha\', {\n          theme: \'clean\',\n          callback: function() {\n            Recaptcha.focus_response_field();\n            resolve();\n          }\n        });\n      });\n    };\n\n    CaptchaUtil.verify = function() {\n      return new Ember.RSVP.Promise(function(resolve, reject) {\n        var data = {\n          challenge: Recaptcha.get_challenge(),\n          response: Recaptcha.get_response()\n        };\n\n        Ember.$.ajax(\'https://realfeelz-server.herokuapp.com/api/captcha/verify\', {\n          type: \'POST\',\n          contentType: \'application/json; charset=utf-8\',\n          data: JSON.stringify(data)\n        })\n        .then(function(response) {\n          resolve(response.result);\n        }, reject);\n      });\n    };\n\n    CaptchaUtil.destroy = function() {\n      Recaptcha.destroy();\n    };\n\n    __exports__[\"default\"] = CaptchaUtil;\n  });//# sourceURL=realfeelz-ui/utils/captcha.js");

;eval("define(\"realfeelz-ui/controllers/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.ArrayController.extend({\n      sortProperties: [\'timeAdded\'],\n      sortAscending: false\n    });\n  });//# sourceURL=realfeelz-ui/controllers/index.js");

;eval("define(\"realfeelz-ui/initializers/export-application-global\", \n  [\"ember\",\"realfeelz-ui/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=realfeelz-ui/initializers/export-application-global.js");

;eval("define(\"realfeelz-ui/models/statement\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.Model.extend({\n      body: DS.attr(\'string\'),\n      timeAdded: DS.attr(\'date\')\n    });\n  });//# sourceURL=realfeelz-ui/models/statement.js");

;eval("define(\"realfeelz-ui/router\", \n  [\"ember\",\"realfeelz-ui/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n      this.route(\'whatsreal\');\n      this.route(\'about\');\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=realfeelz-ui/router.js");

;eval("define(\"realfeelz-ui/routes/about\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var AboutRoute = Ember.Route.extend({\n    });\n\n    __exports__[\"default\"] = AboutRoute;\n  });//# sourceURL=realfeelz-ui/routes/about.js");

;eval("define(\"realfeelz-ui/routes/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var IndexRoute = Ember.Route.extend({\n    });\n\n    __exports__[\"default\"] = IndexRoute;\n  });//# sourceURL=realfeelz-ui/routes/index.js");

;eval("define(\"realfeelz-ui/routes/whatsreal\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var WhatsrealRoute = Ember.Route.extend({\n      model: function() {\n        return this.store.findAll(\'statement\');\n      },\n\n      actions: {\n        postStatement: function(newPost) {\n          var post = this.store.createRecord(\'statement\', {\n            body: newPost\n          });\n          post.save();\n        }\n      }\n    });\n\n    __exports__[\"default\"] = WhatsrealRoute;\n  });//# sourceURL=realfeelz-ui/routes/whatsreal.js");

;eval("define(\"realfeelz-ui/templates/about\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', escapeExpression=this.escapeExpression;\n\n\n      data.buffer.push(escapeExpression(helpers.view.call(depth0, \"flick-view\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"STRING\"],data:data})));\n      data.buffer.push(\"\\n<div class=\\\"flicker-example\\\">\\n\\n  <ul>\\n\\n    <li data-background=\\\"/public/assets/images/meiz.jpg\\\">\\n      <div class=\\\"flick-title\\\">Flickerplate Is Working</div>\\n      <div class=\\\"flick-sub-text\\\">Heaven forbid this package you downloaded is broken. That wouldn\'t be embarrassing at all.</div>\\n    </li>\\n\\n    <li data-background=\\\"/public/assets/images/locks.jpg\\\">\\n      <div class=\\\"flick-title\\\">Editable via Javascript or CSS</div>\\n      <div class=\\\"flick-sub-text\\\">Take a look at the extensive documentation to see how you can change the settings in multiple ways.</div>\\n    </li>\\n\\n    <li data-background=\\\"/public/assets/images/rising_light_crop.jpg\\\">\\n      <div class=\\\"flick-title\\\">Touch Enabled Through the Hammer.js Library</div>\\n      <div class=\\\"flick-sub-text\\\"><a href=\\\"http://hammerjs.github.io/\\\">Hammer.js</a> is a great touch library that has been included as part of the Flickerplate package.</div>\\n    </li>\\n\\n  </ul>\\n\\n</div>\");\n      return buffer;\n      \n    });\n  });//# sourceURL=realfeelz-ui/templates/about.js");

;eval("define(\"realfeelz-ui/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\\n\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=realfeelz-ui/templates/application.js");

;eval("define(\"realfeelz-ui/templates/error\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<p class=\\\"error\\\">Unable to load content at this time. Sorry !</p>\\n\");\n      \n    });\n  });//# sourceURL=realfeelz-ui/templates/error.js");

;eval("define(\"realfeelz-ui/templates/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', escapeExpression=this.escapeExpression;\n\n\n      data.buffer.push(escapeExpression(helpers.view.call(depth0, \"slick-view\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"STRING\"],data:data})));\n      data.buffer.push(\"\\n<div class=\\\"slider autoplay\\\">\\n  <div class=\\\"panel\\\">\\n    <h5>This is a regular panel.</h5>\\n    <p>It has an easy to override visual style, and is appropriately subdued.</p>\\n  </div>\\n  <div class=\\\"panel\\\">\\n    <h5>This is a regular panel.</h5>\\n    <p>It has an easy to override visual style, and is appropriately subdued.</p>\\n  </div>\\n  <div class=\\\"panel\\\">\\n    <h5>This is a regular panel.</h5>\\n    <p>It has an easy to override visual style, and is appropriately subdued.</p>\\n  </div>\\n  <div class=\\\"panel\\\">\\n    <h5>This is a regular panel.</h5>\\n    <p>It has an easy to override visual style, and is appropriately subdued.</p>\\n  </div>\\n  <div class=\\\"panel\\\">\\n    <h5>This is a regular panel.</h5>\\n    <p>It has an easy to override visual style, and is appropriately subdued.</p>\\n  </div>\\n  <div class=\\\"panel\\\">\\n    <h5>This is a regular panel.</h5>\\n    <p>It has an easy to override visual style, and is appropriately subdued.</p>\\n  </div>\\n</div>\\n\\n\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=realfeelz-ui/templates/index.js");

;eval("define(\"realfeelz-ui/templates/loading\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<p>Loading...</p>\\n\");\n      \n    });\n  });//# sourceURL=realfeelz-ui/templates/loading.js");

;eval("define(\"realfeelz-ui/templates/whatsreal\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"\\n          <p>Verifying Captcha...</p>\\n          \");\n      }\n\n    function program3(depth0,data) {\n      \n      \n      data.buffer.push(\"\\n          <p>Getting a Captcha...</p>\\n          \");\n      }\n\n    function program5(depth0,data) {\n      \n      \n      data.buffer.push(\"\\n          <p>Now that we know you are a human, hit post again to share.</p>\\n        </div>\\n        \");\n      }\n\n    function program7(depth0,data) {\n      \n      \n      data.buffer.push(\"\\n          <p>Try again...</p>\\n        \");\n      }\n\n    function program9(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n          <p class=\\\"truths\\\">\");\n      stack1 = helpers._triageMustache.call(depth0, \"body\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</p>\\n        \");\n      return buffer;\n      }\n\n    function program11(depth0,data) {\n      \n      \n      data.buffer.push(\"©RealFeelz 2014\");\n      }\n\n    function program13(depth0,data) {\n      \n      \n      data.buffer.push(\"About\");\n      }\n\n    function program15(depth0,data) {\n      \n      \n      data.buffer.push(\"Home\");\n      }\n\n      data.buffer.push(\"\\n\\n  <div class=\\\"form-statments\\\">\\n  <div class=\\\"row\\\">\\n    <div class=\\\"small-12 medium-12 large-12 columns\\\">\\n      <form \");\n      data.buffer.push(escapeExpression(helpers.action.call(depth0, \"postStatement\", \"newPost\", {hash:{\n        \'on\': (\"submit\")\n      },hashTypes:{\'on\': \"STRING\"},hashContexts:{\'on\': depth0},contexts:[depth0,depth0],types:[\"STRING\",\"ID\"],data:data})));\n      data.buffer.push(\">\\n        \");\n      data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{\n        \'placeholder\': (\"what\'s real for you right now?\"),\n        \'class\': (\"text-field\"),\n        \'value\': (\"newPost\"),\n        \'type\': (\"text\"),\n        \'autofocus\': (\"true\"),\n        \'cols\': (\"40\"),\n        \'maxlength\': (\"200\"),\n        \'require\': (\"true\"),\n        \'wrap\': (\"hard\")\n      },hashTypes:{\'placeholder\': \"STRING\",\'class\': \"STRING\",\'value\': \"ID\",\'type\': \"STRING\",\'autofocus\': \"STRING\",\'cols\': \"STRING\",\'maxlength\': \"STRING\",\'require\': \"STRING\",\'wrap\': \"STRING\"},hashContexts:{\'placeholder\': depth0,\'class\': depth0,\'value\': depth0,\'type\': depth0,\'autofocus\': depth0,\'cols\': depth0,\'maxlength\': depth0,\'require\': depth0,\'wrap\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"textarea\", options))));\n      data.buffer.push(\"\\n        <div id=\\\"recaptcha\\\"></div>\\n        <div class=\\\"status-text\\\">\\n          \");\n      stack1 = helpers[\'if\'].call(depth0, \"verifyingCaptcha\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n          \");\n      stack1 = helpers[\'if\'].call(depth0, \"showingCaptcha\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n          \");\n      stack1 = helpers[\'if\'].call(depth0, \"captchaVerified\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n        \");\n      stack1 = helpers[\'if\'].call(depth0, \"tryAgain\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n        <div class=\\\"flexcenter\\\">\\n          <button class=\\\"button radius\\\" type=\\\"submit\\\">Post</button>\\n        </div>\\n      </form>\\n    </div>\\n  </div>\\n  </div>\\n\\n  <div class=\\\"statement-container\\\">\\n    <div class=\\\"row\\\">\\n      <div class=\\\"small-12 medium-12 large-12 columns panel radius\\\">\\n        <ul>\\n        \");\n      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n        </ul>\\n      </div>\\n    </div>\\n  </div>\\n</body>\\n\\n<footer class=\\\"row\\\">\\n  <div class=\\\"large-12 columns\\\">\\n    <hr/>\\n    <div class=\\\"row\\\">\\n      <div class=\\\"large-6 columns\\\">\\n        <p id=\\\"copyright\\\">\");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"index\", options) : helperMissing.call(depth0, \"link-to\", \"index\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</p>\\n        <ul class=\\\"inline-list right\\\">\\n          <li><a href=\\\"#\\\">\");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"about\", options) : helperMissing.call(depth0, \"link-to\", \"about\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</a></li>\\n          <li><a href=\\\"#\\\">\");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"index\", options) : helperMissing.call(depth0, \"link-to\", \"index\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</a></li>\\n        </ul>\\n      </div>\\n    </div>\\n  </div>\\n</footer>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=realfeelz-ui/templates/whatsreal.js");

;eval("define(\"realfeelz-ui/tests/adapters/application.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - adapters\');\n    test(\'adapters/application.js should pass jshint\', function() { \n      ok(true, \'adapters/application.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/adapters/application.jshint.js");

;eval("define(\"realfeelz-ui/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/app.jshint.js");

;eval("define(\"realfeelz-ui/tests/controllers/application.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - controllers\');\n    test(\'controllers/application.js should pass jshint\', function() { \n      ok(true, \'controllers/application.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/controllers/application.jshint.js");

;eval("define(\"realfeelz-ui/tests/controllers/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - controllers\');\n    test(\'controllers/index.js should pass jshint\', function() { \n      ok(true, \'controllers/index.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/controllers/index.jshint.js");

;eval("define(\"realfeelz-ui/tests/helpers/resolver\", \n  [\"ember/resolver\",\"realfeelz-ui/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=realfeelz-ui/tests/helpers/resolver.js");

;eval("define(\"realfeelz-ui/tests/helpers/start-app\", \n  [\"ember\",\"realfeelz-ui/app\",\"realfeelz-ui/router\",\"realfeelz-ui/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=realfeelz-ui/tests/helpers/start-app.js");

;eval("define(\"realfeelz-ui/tests/models/statement.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - models\');\n    test(\'models/statement.js should pass jshint\', function() { \n      ok(true, \'models/statement.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/models/statement.jshint.js");

;eval("define(\"realfeelz-ui/tests/realfeelz-ui/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - realfeelz-ui/tests/helpers\');\n    test(\'realfeelz-ui/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'realfeelz-ui/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/realfeelz-ui/tests/helpers/resolver.jshint.js");

;eval("define(\"realfeelz-ui/tests/realfeelz-ui/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - realfeelz-ui/tests/helpers\');\n    test(\'realfeelz-ui/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'realfeelz-ui/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/realfeelz-ui/tests/helpers/start-app.jshint.js");

;eval("define(\"realfeelz-ui/tests/realfeelz-ui/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - realfeelz-ui/tests\');\n    test(\'realfeelz-ui/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'realfeelz-ui/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/realfeelz-ui/tests/test-helper.jshint.js");

;eval("define(\"realfeelz-ui/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/router.jshint.js");

;eval("define(\"realfeelz-ui/tests/routes/about.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/about.js should pass jshint\', function() { \n      ok(true, \'routes/about.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/routes/about.jshint.js");

;eval("define(\"realfeelz-ui/tests/routes/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/index.js should pass jshint\', function() { \n      ok(true, \'routes/index.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/routes/index.jshint.js");

;eval("define(\"realfeelz-ui/tests/routes/whatsreal.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/whatsreal.js should pass jshint\', function() { \n      ok(true, \'routes/whatsreal.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/routes/whatsreal.jshint.js");

;eval("define(\"realfeelz-ui/tests/test-helper\", \n  [\"realfeelz-ui/tests/helpers/resolver\",\"ember-mocha\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    /* globals require, mocha */\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    $(document).ready(function(){\n      // Rename elements from qunit -> mocha\n      $(\'#qunit\').attr(\'id\', \'mocha\');\n      $(\'#qunit-fixture\').attr(\'id\', \'mocha-fixture\');\n\n      // Declare `expect` as a global here instead of as a var in individual tests.\n      // This avoids jshint warnings re: `Redefinition of \'expect\'`.\n      window.expect = chai.expect;\n\n      require(\'ember-cli/test-loader\')[\'default\'].load();\n\n      mocha.run();\n    });\n  });//# sourceURL=realfeelz-ui/tests/test-helper.js");

;eval("define(\"realfeelz-ui/tests/utils/captcha.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - utils\');\n    test(\'utils/captcha.js should pass jshint\', function() { \n      ok(false, \'utils/captcha.js should pass jshint.\\nutils/captcha.js: line 7, col 14, \\\'Ember\\\' is not defined.\\nutils/captcha.js: line 8, col 5, \\\'Recaptcha\\\' is not defined.\\nutils/captcha.js: line 11, col 9, \\\'Recaptcha\\\' is not defined.\\nutils/captcha.js: line 19, col 14, \\\'Ember\\\' is not defined.\\nutils/captcha.js: line 21, col 18, \\\'Recaptcha\\\' is not defined.\\nutils/captcha.js: line 22, col 17, \\\'Recaptcha\\\' is not defined.\\nutils/captcha.js: line 25, col 5, \\\'Ember\\\' is not defined.\\nutils/captcha.js: line 37, col 3, \\\'Recaptcha\\\' is not defined.\\nutils/captcha.js: line 7, col 51, \\\'reject\\\' is defined but never used.\\n\\n9 errors\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/utils/captcha.jshint.js");

;eval("define(\"realfeelz-ui/tests/views/flick-view.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - views\');\n    test(\'views/flick-view.js should pass jshint\', function() { \n      ok(false, \'views/flick-view.js should pass jshint.\\nviews/flick-view.js: line 2, col 1, \\\'flickerplate\\\' is defined but never used.\\n\\n1 error\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/views/flick-view.jshint.js");

;eval("define(\"realfeelz-ui/tests/views/magellan-view.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - views\');\n    test(\'views/magellan-view.js should pass jshint\', function() { \n      ok(false, \'views/magellan-view.js should pass jshint.\\nviews/magellan-view.js: line 1, col 1, \\\'MY_GLOBAL\\\' is defined but never used.\\n\\n1 error\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/views/magellan-view.jshint.js");

;eval("define(\"realfeelz-ui/tests/views/slick-view.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - views\');\n    test(\'views/slick-view.js should pass jshint\', function() { \n      ok(true, \'views/slick-view.js should pass jshint.\'); \n    });\n  });//# sourceURL=realfeelz-ui/tests/views/slick-view.jshint.js");

;eval("define(\"realfeelz-ui/views/flick-view\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    /* global flickerplate */\n\n    __exports__[\"default\"] = Ember.View.extend({\n    	didInsertElement: function() {\n    		Ember.$(document).ready(function() {\n    			Ember.$(\'.flicker-example\').css({\n    				color: \'red\'\n    			});\n    			// Ember.$(\'flicker-example\').flickerplate({\n    			//   auto_flick: true,\n    			//   auto_flick_delay: 8,\n    			//   flick_animation: \'transform-slide\'\n    			// });\n    		});\n    	}\n    });\n\n    // templateName: \'about\',\n    // route: \'about\',\n    // view: \'about\',\n  });//# sourceURL=realfeelz-ui/views/flick-view.js");

;eval("define(\"realfeelz-ui/views/magellan-view\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    /* global MY_GLOBAL */\n\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.View.extend({\n    	didInsertElement: function() {\n    		Ember.$(document).ready(function() {\n    			Ember.$(\'.magellan-expedition\').foundation({\n    				active_class: \'active\', // specify the class used for active sections\n    				threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto\n    				destination_threshold: 20, // pixels from the top of destination for it to be considered active\n    				throttle_delay: 50, // calculation throttling to increase framerate\n    				fixed_top: 0 // top distance in pixels assigned to the fixed element on scroll\n    			});\n    		});\n    	}\n    });\n  });//# sourceURL=realfeelz-ui/views/magellan-view.js");

;eval("define(\"realfeelz-ui/views/slick-view\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.View.extend({\n    	didInsertElement: function() {\n    		Ember.$(document).ready(function() {\n    			Ember.$(\'.autoplay\').slick({\n    				slidesToShow: 1,\n    				slidesToScroll: 1,\n    				autoplay: true,\n    				autoplaySpeed: 2000,\n    				adaptiveHeight: true\n    			});\n    		});\n    	}\n    });\n\n    // Ember.$(\'.one-time\').slick({\n    // 	dots: true,\n    // 	infinite: true,\n    // 	speed: 300,\n    // 	slidesToShow: 1,\n    // 	adaptiveHeight: true\n    // });\n\n    // Ember.$(\'.responsive\').slick({\n    // 	dots: true,\n    // 	infinite: false,\n    // 	speed: 300,\n    // 	slidesToShow: 4,\n    // 	slidesToScroll: 4,\n    // 	responsive: [{\n    // 		breakpoint: 1024,\n    // 		settings: {\n    // 			slidesToShow: 3,\n    // 			slidesToScroll: 3,\n    // 			infinite: true,\n    // 			dots: true\n    // 		}\n    // 	}, {\n    // 		breakpoint: 600,\n    // 		settings: {\n    // 			slidesToShow: 2,\n    // 			slidesToScroll: 2\n    // 		}\n    // 	}, {\n    // 		breakpoint: 480,\n    // 		settings: {\n    // 			slidesToShow: 1,\n    // 			slidesToScroll: 1\n    // 		}\n    // 	}]\n    // });\n  });//# sourceURL=realfeelz-ui/views/slick-view.js");
