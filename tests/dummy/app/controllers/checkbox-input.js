import Ember from 'ember';

export default Ember.Controller.extend({
  checkboxCategories: [
    { id: 'news', name: 'News' },
    { id: 'announcements', name: 'Announcements' },
    { id: 'videos', name: 'Videos' }
  ],
  categories: [],
  selectedCategories: Ember.computed('categories.[]', {
    get() {
      let categories = this.get('categories').join(', ');
      return `${categories}`;
    }
  }),

  actions: {
    updateCategories(value) {
      let categories = this.get('categories');
      if (categories.contains(value)) {
        categories.removeObject(value);
      } else {
        categories.pushObject(value);
      }
    }
  }
});
