<script>
  import { createEventDispatcher } from 'svelte';

  export let enabled;

  const dispatch = createEventDispatcher();
</script>

<div class="solve-buttons">
  <button disabled={!enabled} on:click={() => dispatch('solveRequest', { goal: 'darkness' })}>Solve for Darkness</button>
  <button disabled={!enabled} on:click={() => dispatch('solveRequest', { goal: 'light' })}>Solve for Light</button>
</div>

<style>
</style>
