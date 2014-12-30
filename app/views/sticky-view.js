import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$(window).load(function() {
        Ember.$("#sticker").sticky({
          topSpacing: 0,
          center: true,
          className: "hey"
        });
      });
    });
  }
});
// Ember.$("#header").sticky({topSpacing: 0});
