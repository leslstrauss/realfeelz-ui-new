import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$(window).load(function() {
        Ember.$("#header").sticky({
            topSpacing: 0,
            bottomSpacing: 0,
            getWidthFrom: '.row',
        });
      });
    });
  }
});
// Ember.$("#header").sticky({topSpacing: 0});
