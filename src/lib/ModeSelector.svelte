<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let selected;
  const options: Array<[String, ModeName]> = [
    { text: 'Easy', mode: 'easy' },
    { text: 'Medium', mode: 'medium' },
    { text: 'Hard', mode: 'hard' },
    { text: 'Very Hard', mode: 'very_hard' },
    { text: 'Special: Dark Symbol', mode: 'dark_symbol' },
    { text: 'Special: Light Symbol', mode: 'light_symbol' },
    { text: 'Special: Four Hexagons', mode: 'four_hexagons' },
    { text: 'Special: Flower', mode: 'flower' },
  ];

  function handleChange(e) {
    dispatch('select', selected);
  }
</script>

<select bind:value={selected} on:change={handleChange}>
  {#each options as option}
    <option value={option.mode}>
      {option.text}
    </option>
  {/each}
</select>
