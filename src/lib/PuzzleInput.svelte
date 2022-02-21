<script>
  import { createEventDispatcher } from 'svelte';
  import { member, light } from '$lib/game_state';

  export let game;

  $: rows = [...Array(game.m).keys()];
  $: cols = [...Array(game.n).keys()];

  const dispatch = createEventDispatcher();
</script>

<div class="puzzle-input">
  {#each rows as i }
    <div class="hex-row">
      {#each cols as j }
        {#if member(game, { i, j }) }
          {#if light(game, { i, j }) }
            <button class="hex hex-light" on:click={(e) => { e.preventDefault(); dispatch('toggle', { i, j }) }}></button>
          {:else}
            <button class="hex hex-dark" on:click={(e) => { e.preventDefault(); dispatch('toggle', { i, j }) }}></button>
          {/if}
        {:else}
          <button class="hex hex-spacer"></button>
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
    clear: left;
  }

  .hex-row:nth-child(even) {
    margin-left: 53px;
    margin-right: -53px;
  }

  .hex:before {
    content: " ";
    width: 0;
    height: 0;
    border-bottom: 30px solid #6C6;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
    position: absolute;
    top: -30px;
    left: 0;
  }

  .hex {
    margin-top: 33px;
    margin-left: 3px;
    width: 104px;
    height: 60px;
    background-color: #6C6;
    position: relative;
    border: 0;
    padding: 0;
  }

  .hex:after {
    content: "";
    width: 0;
    position: absolute;
    bottom: -30px;
    left: 0;
    border-top: 30px solid #6C6;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
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
