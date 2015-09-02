import Ember from 'ember';

export default Ember.Component.extend({
  unitCategories: [
    { id: 'cm', name: 'Cm' },
    { id: 'ft', name:'Ft/In' }
  ],
  activeUnit: '',
  isCm: Ember.computed('activeUnit', {
    get(){
      if(this.get('activeUnit') == 'cm'){
        return true;
      }
    }
  }),
  isFt: Ember.computed('activeUnit', {
    get(){
      if(this.get('activeUnit') == 'ft'){
        return true;
      }
    }
  }),
  actions: {
    activateUnit(unit){
      this.set('activeUnit', unit);
    }
  }
});
