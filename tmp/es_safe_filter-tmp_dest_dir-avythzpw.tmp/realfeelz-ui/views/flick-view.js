import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$(document).ready(function() {
			Ember.$('.slideshow').flickerplate({
				auto_flick: true,
				auto_flick_delay: 8,
				flick_animation: 'transform-slide',
				block_text: true
			});
		});
	}
});