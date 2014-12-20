import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$(document).ready(function() {
			Ember.$('flicker-example').flickerplate({
				auto_flick: true,
				auto_flick_delay: 8,
				flick_animation: 'transform-slide'
			});
		});
	}
});