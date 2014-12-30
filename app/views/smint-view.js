  import Ember from 'ember';

  export default Ember.View.extend({
    didInsertElement: function() {
      Ember.$(document).ready(function() {
        $('.subMenu').smint({
          'scrollSpeed': 1000
        });
      });
    }
  });
