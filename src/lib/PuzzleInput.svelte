<script>
  import { createEventDispatcher } from 'svelte';
  import { member, light } from '$lib/game_state';

  export let game;

  $: rows = [...Array(game.m).keys()];
  $: cols = [...Array(game.n).keys()];
  $: width = 1 / game.n;
  $: height = width * 100 / Math.sin(Math.PI / 3);

  const dispatch = createEventDispatcher();
</script>

<div class="puzzle-input" style="--hex-width: { width * 100 }%; --hex-height: { height * 100 }%">
  {#each rows as i }
    <div class="hex-row">
      {#each cols as j }
        {#if member(game, { i, j }) }
          <div class="hex {light(game, { i, j }) ? "hex-light" : "hex-dark"}">
            <div class="hex-inner">
              <button class="hex-button" on:click={(e) => { e.preventDefault(); dispatch('toggle', { i, j }) }}></button>
            </div>
          </div>
        {:else}
          <div class="hex hex-spacer">
            <div class="hex-inner"></div>
          </div>
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
  .puzzle-input {
    width: 100%;
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

  .hex {
    width: var(--hex-width);
    position: relative;
    visibility: hidden;
  }

  .hex::after{
    content: '';
    display: block;
    padding-bottom: 86.602%;
  }

  .hex-spacer {
    visibility: hidden;
  }

  .hex-inner {
    position: absolute;
    width: 96%;
    padding-bottom: 110.851%;
    margin: 2%;
    transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    visibility: hidden;
    overflow: hidden;
  }

  .hex-button {
    display: block;
    position: absolute;
    border: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: skewY(-30deg) rotate3d(0,0,1,60deg);
    visibility: visible;
  }

  .hex-dark .hex-button {
    background-color: var(--dark-color);
  }

  .hex-light .hex-button {
    background-color: var(--light-color);
  }
</style>
