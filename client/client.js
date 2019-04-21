import { Meteor } from 'meteor/meteor';
import Person from '/imports/client/Person.svelte';

Meteor.startup(() => {
  new Person({
    target: document.querySelector('main')
  });
});
