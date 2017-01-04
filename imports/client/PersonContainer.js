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
    this.interval = setInterval(() => {
      component.set({
        age: component.get('age') + 1
      });
    }, 1000);
  },

  onteardown() {
    clearInterval(this.interval);
  }
});
