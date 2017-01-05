import { withTracker } from 'meteor/svelte:tracker';

import PersonComponent from './Person.html';
import Persons from '/imports/collections/persons.js';

export default withTracker(PersonComponent, {
  data(component) {
    component.set({
      person: Persons.findOne()
    });
  },

  onrender(component) {
    let age = 0;

    this.interval = setInterval(() => {
      age += 1;
      component.set({ age });
    }, 1000);

    component.on('ageReset', () => {
      age = 0;
      component.set({ age });
    })
  },

  onteardown() {
    clearInterval(this.interval);
  }
});
