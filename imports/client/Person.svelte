{#if person}
  <h1>Hello, {person.name}!</h1>
  You have aged {age} seconds since you have opened this page. 👵

  <button on:click="{() => age = 0}">
    Reset age
  </button>
{/if}

<script>
  import { Tracker } from 'meteor/tracker';
  import { onDestroy } from 'svelte';
  import Persons from '/imports/collections/persons.js';

  let person;
  let age = 0;

  const computation = Tracker.autorun(() => {
    person = Persons.findOne();
  });

  setInterval(() => {
    age += 1;
  }, 1000);

  onDestroy(() => {
    clearInterval(interval);
    computation.stop();
  });
</script>
