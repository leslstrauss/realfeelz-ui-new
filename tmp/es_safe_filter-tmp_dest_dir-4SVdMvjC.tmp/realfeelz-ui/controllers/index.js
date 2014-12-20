import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['timeAdded'],
  sortAscending: false
});
