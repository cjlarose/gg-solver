<script>
  import { createEventDispatcher } from 'svelte';
  import { member, light } from '$lib/game_state';

  export let game;

  $: rows = [...Array(game.m).keys()];
  $: cols = [...Array(game.n).keys()];
  $: width = 550 * (1 / game.n);
  $: height = 1 / Math.sqrt(3) * width;

  const dispatch = createEventDispatcher();
</script>

<div class="puzzle-input" style="--hex-width: { Math.floor(width) }px; --hex-height: { Math.floor(height) }px">
  {#each rows as i }
    <div class="hex-row">
      {#each cols as j }
        {#if member(game, { i, j }) }
          {#if light(game, { i, j }) }
            <div class="hex hex-light" on:click={(e) => { e.preventDefault(); dispatch('toggle', { i, j }) }}></div>
          {:else}
            <div class="hex hex-dark" on:click={(e) => { e.preventDefault(); dispatch('toggle', { i, j }) }}></div>
          {/if}
        {:else}
          <div class="hex hex-spacer"></div>
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
  .puzzle-input {
    --dark-color: #333;
    --light-color: #cc3;
  }

  .hex-row {
    display: flex;
  }

  .hex-row:nth-child(even) {
    margin-left: calc(var(--hex-width) / 2);
    margin-right: calc(var(--hex-width) / -2);
  }

  .hex:before {
    content: " ";
    width: 0;
    height: 0;
    border-bottom: calc(var(--hex-height) / 2) solid #6C6;
    border-left: calc(var(--hex-width) / 2) solid transparent;
    border-right: calc(var(--hex-width) / 2) solid transparent;
    position: absolute;
    top: calc(var(--hex-height) / -2);
    left: 0;
  }

  .hex {
    margin-top: calc((var(--hex-height) / 2) + 3px);
    margin-left: 3px;
    width: var(--hex-width);
    height: var(--hex-height);
    background-color: #6C6;
    position: relative;
    border: 0;
    padding: 0;
  }

  .hex:after {
    content: "";
    width: 0;
    position: absolute;
    bottom: calc(var(--hex-height) / -2);
    left: 0;
    border-top: calc(var(--hex-height) / 2) solid #6C6;
    border-left: calc(var(--hex-width) / 2) solid transparent;
    border-right: calc(var(--hex-width) / 2) solid transparent;
  }

  .hex-spacer {
    visibility: hidden;
  }

  .hex-dark {
    background-color: var(--dark-color);
  }

  .hex-dark:before {
    border-bottom-color: var(--dark-color);
  }

  .hex-dark:after {
    border-top-color: var(--dark-color);
  }

  .hex-light {
    background-color: var(--light-color);
  }

  .hex-light:before {
    border-bottom-color: var(--light-color);
  }

  .hex-light:after {
    border-top-color: var(--light-color);
  }
</style>
