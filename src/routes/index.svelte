<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import { createEasyGame } from '$lib/game_state';
	import PuzzleInput from '$lib/PuzzleInput.svelte';

  let game = createEasyGame();

  function handleToggle(e) {
    game.toggle(e.detail);
  }

  $: console.log(game.coords);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Calculator</h1>

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
