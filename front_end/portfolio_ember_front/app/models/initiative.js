import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title:       DS.attr('string'),
  description: DS.attr('string'),
  timePeriod:  DS.attr('string'),
  population:  DS.attr('string'),
  employeeNum: DS.attr('number'),
  countries:   DS.attr('string'),
  language:    DS.attr('string'),
  launchDate:  DS.attr('date'),
  account:     DS.belongsTo('account'),

  fullName: Ember.computed('firstName', 'lastName', function () {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});