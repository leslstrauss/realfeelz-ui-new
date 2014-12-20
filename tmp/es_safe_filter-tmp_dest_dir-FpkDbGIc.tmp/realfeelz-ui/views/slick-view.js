import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$(document).ready(function() {
			Ember.$('.autoplay').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
				adaptiveHeight: true
			});
		});
	}
});

// Ember.$('.one-time').slick({
// 	dots: true,
// 	infinite: true,
// 	speed: 300,
// 	slidesToShow: 1,
// 	adaptiveHeight: true
// });

// Ember.$('.responsive').slick({
// 	dots: true,
// 	infinite: false,
// 	speed: 300,
// 	slidesToShow: 4,
// 	slidesToScroll: 4,
// 	responsive: [{
// 		breakpoint: 1024,
// 		settings: {
// 			slidesToShow: 3,
// 			slidesToScroll: 3,
// 			infinite: true,
// 			dots: true
// 		}
// 	}, {
// 		breakpoint: 600,
// 		settings: {
// 			slidesToShow: 2,
// 			slidesToScroll: 2
// 		}
// 	}, {
// 		breakpoint: 480,
// 		settings: {
// 			slidesToShow: 1,
// 			slidesToScroll: 1
// 		}
// 	}]
// });