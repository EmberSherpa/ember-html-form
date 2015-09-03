import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['activeUnit'],
  activeUnit: 'cm',

  units: [
    { id: 'cm', name: 'Centimeters' },
    { id: 'in', name:'Inches' }
  ],

  actions: {
    setActiveUnit(unit){
      this.set('activeUnit', unit);
    }
  }
});
