import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var items = [];
    for (var i = 0; i < 10000; i++) {
      const name = `Item ${i+1}`;
      const id = `item-${i+1}`;
      items.push({ name, id });
    }
    return items;
  }
});
