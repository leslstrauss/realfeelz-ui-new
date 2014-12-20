import Ember from 'ember';
import CaptchaUtil from '../utils/captcha';

export default Ember.ArrayController.extend({
  actions: {
    postStatement: function(newPost) {
      var self = this;
      var bubbleState;
      var tryAgain = false;

      if (self.get('captchaVerified')) {
        bubbleState = true;
      }
      else if (self.get('captchaVisible')) {
        if (!self.get('verifyingCaptcha')) {
          // Calls the verify function
          self.set('tryAgain', false);
          self.set('verifyingCaptcha', true);
          CaptchaUtil.verify().then(function(result) {
            self.set('verifyingCaptcha', false);
            var verified = result.verified;

            if (verified === true) {
              // Submits the statement after captcha verification returns true.
              self.set('tryAgain', false);
              self.set('captchaVerified', true);
              CaptchaUtil.destroy();
              self.set('captchaVisible', false);
              self.send('postStatement', newPost);
            } else {
              // Makes a call to display a new captcha if verification returns false.
              self.set('showingCaptcha', true);
              CaptchaUtil.show().then(function() {
                tryAgain = true;
                self.set('showingCaptcha', false);
                self.set('tryAgain', tryAgain);
                self.set('captchaVerified', false);
                self.set('captchaVisible', true);
              });
            }
          });
        }
        bubbleState = false;
      }
      else {
        // Calls the show function to display the Captcha.
        CaptchaUtil.show().then(function() {
          self.set('captchaVisible', true);
        });
        bubbleState = false;
      }

      return bubbleState;
    }
  }
});
