<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import { createGameFromMode, solvedForDarkness, solvedForLight } from '$lib/game_state';
  import { ModeName, tilesForMode } from '$lib/mode';
  import PuzzleInput from '$lib/PuzzleInput.svelte';
  import ModeSelector from '$lib/ModeSelector.svelte';
  import SolveButtons from '$lib/SolveButtons.svelte';

  let modeName: ModeName = 'easy'
  $: mode = tilesForMode(modeName);
  $: game = createGameFromMode(mode);

  function handleModeSelection(e) {
    modeName = e.detail;
  }

  function handleToggle(e) {
    game.toggle(e.detail);
  }

  let solvedForDarknessEnabled = false;
  let solvedForLightEnabled = false;
  $: solveForDarknessEnabled = !solvedForDarkness($game);
  $: solveForLightEnabled = !solvedForLight($game);

  function handleSolveRequest(e) {
    console.log('handleSolveRequest');
    console.log(e.detail)
  }
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Calculator</h1>

  <ModeSelector {modeName} on:select={handleModeSelection} />
  <PuzzleInput game={$game} on:toggle={handleToggle} />
  <SolveButtons darknessEnabled={solveForDarknessEnabled}
                lightEnabled={solveForLightEnabled}
                on:solveRequest={handleSolveRequest}
                />
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
