import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$("#sticky_item").stick_in_parent();
    });
  }
});
