import DS from 'ember-data';

export default DS.Model.extend({
  initiatives: DS.hasMany('initiatives')
});
