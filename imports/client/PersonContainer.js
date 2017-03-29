import { withTracker } from 'meteor/svelte:tracker';

import PersonComponent from './Person.html';
import Persons from '/imports/collections/persons.js';

export default withTracker(PersonComponent, {
  // The `data` function is called when the container is rendered into the DOM
  // and when the fetched document changes in the database.
  data(component) {
    component.set({
      person: Persons.findOne()
    });
  },

  oncreate(component) {
    let age = 0;

    // Increment the age every second and update the component's state with the
    // new value. The interval identifier returned by `setInterval` is stored in
    // the container so that the interval can be cleared in `onteardown` below.
    this.interval = setInterval(() => {
      age += 1;
      component.set({ age });
    }, 1000);

    // Respond to the `ageReset` event fired by the component.
    component.on('ageReset', () => {
      age = 0;
      component.set({ age });
    })
  },

  ondestroy() {
    clearInterval(this.interval);
  }
});
