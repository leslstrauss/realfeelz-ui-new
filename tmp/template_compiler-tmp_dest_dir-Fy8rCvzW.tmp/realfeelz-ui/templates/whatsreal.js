import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n          <p>Verifying Captcha...</p>\n          ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n          <p>Getting a Captcha...</p>\n          ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n          <p>Now that we know you are a human, hit post again to share.</p>\n        </div>\n        ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n          <p>Try again...</p>\n        ");
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <p class=\"truths panel radius\">");
  stack1 = helpers._triageMustache.call(depth0, "body", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("©RealFeelz 2014");
  }

  data.buffer.push("\n  <div class=\"form-statments\">\n  <div class=\"row\">\n    <div class=\"small-12 medium-12 large-12 columns\">\n      <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "postStatement", "newPost", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'placeholder': ("what's real for you right now?"),
    'class': ("text-field"),
    'value': ("newPost"),
    'type': ("text"),
    'autofocus': ("true"),
    'cols': ("40"),
    'maxlength': ("200"),
    'require': ("true"),
    'wrap': ("hard")
  },hashTypes:{'placeholder': "STRING",'class': "STRING",'value': "ID",'type': "STRING",'autofocus': "STRING",'cols': "STRING",'maxlength': "STRING",'require': "STRING",'wrap': "STRING"},hashContexts:{'placeholder': depth0,'class': depth0,'value': depth0,'type': depth0,'autofocus': depth0,'cols': depth0,'maxlength': depth0,'require': depth0,'wrap': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n        <div id=\"recaptcha\"></div>\n        <div class=\"status-text\">\n          ");
  stack1 = helpers['if'].call(depth0, "verifyingCaptcha", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "showingCaptcha", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "captchaVerified", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "tryAgain", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div class=\"flexcontainer\">\n          <div id=\"post\" class=\"small-12 medium-12 large-12 columns flexcenter\">\n            <button class=\"button radius\" type=\"submit\">Post</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  </div>\n\n  <div class=\"statement-container\">\n    <div class=\"row\">\n      <div class=\"small-12 medium-12 large-12 columns panel radius\">\n        <ul>\n        ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n      </div>\n    </div>\n  </div>\n</body>\n\n<footer class=\"row\">\n  <div class=\"small-12 medium-12 large-12 columns\">\n    <hr/>\n    <div class=\"flexcenter\">\n      <div class=\"small-6 medium-6 large-6 columns\">\n        <p id=\"copyright\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      </div>\n\n    </div>\n  </div>\n</footer>\n\n\n\n\n");
  return buffer;
  
});
