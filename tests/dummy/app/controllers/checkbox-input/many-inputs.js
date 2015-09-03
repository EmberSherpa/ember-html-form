import Ember from 'ember';

const {
  on
} = Ember;

export default Ember.Controller.extend({
  initialize: on('init', function(){
    this.set('selection', []);
  }),
  actions: {
    updateSelection(item) {
      const selection = this.get('selection');
      if (selection.contains(item)) {
        selection.removeObject(item);
      } else {
        selection.pushObject(item);
      }
    }
  }
});
