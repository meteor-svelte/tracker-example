import { Meteor } from 'meteor/meteor';
import Person from './Person.svelte';

Meteor.startup(() => {
  new Person({
    target: document.querySelector('main')
  });
});
