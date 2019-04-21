import { Meteor } from 'meteor/meteor';

import Persons from '/lib/Persons.js';

Meteor.startup(() => {
  if (Persons.find().count() < 1) {
    Persons.insert({
      name: 'Meteor developer'
    });
  }
});
