import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('String'),
  author: DS.attr('String'),
  body: DS.attr('String'),

});
