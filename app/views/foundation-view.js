import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$(document).ready(function() {
			Ember.$(document).foundation();
      // Ember.$( "li" ).add( "p" ).css( "background-color", "red" );
		});
	}
});