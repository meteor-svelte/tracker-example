import { Meteor } from 'meteor/meteor';

import PersonContainer from '/imports/client/PersonContainer.js';

Meteor.startup(() => {
  new PersonContainer({
    target: document.querySelector('main')
  });
});
