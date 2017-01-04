import { Meteor } from 'meteor/meteor';

import Persons from '/imports/collections/persons.js';

Meteor.startup(() => {
  if (Persons.find().count() < 1) {
    Persons.insert({
      name: 'Meteor developer'
    });
  }
});
