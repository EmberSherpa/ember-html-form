import Ember from 'ember';

const {
  A
} = Ember;

// BEGIN-SNIPPET simple-checkboxes-controller
export default Ember.Controller.extend({
  options: [
    { id: 'news', name: 'News' },
    { id: 'announcements', name: 'Announcements' },
    { id: 'videos', name: 'Videos' }
  ],
  init() {
    this.set('selection', new A());
  },
  actions: {
    updateSelection(value) {
      let selection = this.get('selection');
      if (selection.contains(value)) {
        selection.removeObject(value);
      } else {
        selection.pushObject(value);
      }
    }
  }
});
// END-SNIPPET
