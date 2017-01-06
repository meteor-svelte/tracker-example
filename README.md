# tracker-example

Tracker integration example

## About

This example demonstrates how to create reactive data loading containers for Svelte components using [svelte-tracker](https://github.com/meteor-svelte/svelte-tracker).
The Svelte component */imports/client/Person.html* displays a name fetched from MongoDB and a state variable.
Both of these values are set by the component's container, which is created in */imports/client/PersonContainer.js*.
