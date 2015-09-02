import Ember from 'ember';

export default Ember.Controller.extend({
  unitCategories: [
    { id: 'cm', name: 'Cm' },
    { id: 'ft', name:'Ft/In' }
  ],
  
  actions: {
    activateUnit(unit){
      this.set('activeUnit', unit);
    }
  }
});
