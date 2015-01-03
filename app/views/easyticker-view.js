import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {

      var dd = Ember.$('.vticker').easyTicker({
        direction: 'up',
        // easing: 'swing',
        // speed: 'slow',
        interval: 1000,
        // height: 'auto',
        visible: 1,
        mousePause: 0,
        controls: {
          up: '.up',
          down: '.down',
          toggle: '.toggle',
          stopText: 'Stop',
          playText: 'Play'
        }
      }).data('easyTicker');

      var cc = 1;
      Ember.$('.aa').click(function() {
        Ember.$('.vticker ul').append('<li>' + cc + ' Triangles can be made easily using CSS also without any images. This trick requires only div tags and some</li>');
        cc++;
      });

      Ember.$('.vis').click(function() {
        dd.options['visible'] = 3;

      });

      Ember.$('.visall').click(function() {
        dd.stop();
        dd.options['visible'] = 0;
        dd.start();
      });

    });
  }
});
