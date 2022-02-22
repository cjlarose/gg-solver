<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import { createGameFromMode } from '$lib/game_state';
  import { ModeName, tilesForMode } from '$lib/mode';
  import PuzzleInput from '$lib/PuzzleInput.svelte';
  import ModeSelector from '$lib/ModeSelector.svelte';

  let modeName: ModeName = 'easy'
  $: mode = tilesForMode(modeName);
  $: game = createGameFromMode(mode);

  function handleModeSelection(e) {
    modeName = e.detail;
  }

  function handleToggle(e) {
    game.toggle(e.detail);
  }
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Calculator</h1>

  <ModeSelector {modeName} on:select={handleModeSelection} />
  <PuzzleInput game={$game} on:toggle={handleToggle} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
