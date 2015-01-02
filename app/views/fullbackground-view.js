import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$(function() {

        var theWindow = Ember.$(window),
          $bg = Ember.$("#bg"),
          aspectRatio = $bg.width() / $bg.height();

        function resizeBg() {

          if ((theWindow.width() / theWindow.height()) < aspectRatio) {
            $bg
              .removeClass()
              .addClass('bgheight');
          } else {
            $bg
              .removeClass()
              .addClass('bgwidth');
          }

        }

        theWindow.resize(function() {
          resizeBg();
        }).trigger("resize");

      });
    });
  }
});
