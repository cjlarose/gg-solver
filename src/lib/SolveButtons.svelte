<script>
  import { createEventDispatcher } from 'svelte';

  export let darknessEnabled;
  export let lightEnabled;

  const dispatch = createEventDispatcher();
</script>

<div class="solve-buttons">
  <button disabled={!darknessEnabled} on:click={() => dispatch('solveRequest', { goal: 'darkness' })}>Solve for Darkness</button>
  <button disabled={!lightEnabled} on:click={() => dispatch('solveRequest', { goal: 'light' })}>Solve for Light</button>
</div>

<style>
</style>
