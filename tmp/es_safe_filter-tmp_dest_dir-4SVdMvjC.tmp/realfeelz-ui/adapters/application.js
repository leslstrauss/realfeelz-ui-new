import DS from "ember-data";

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'https://realfeelz-server.herokuapp.com'
});
