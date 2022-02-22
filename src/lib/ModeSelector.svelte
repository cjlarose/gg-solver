<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let selected;
  const options: Array<[String, ModeName]> = [
    { text: 'Easy', mode: 'easy' },
    { text: 'Medium', mode: 'medium' },
    { text: 'Hard', mode: 'hard' },
    { text: 'Very Hard', mode: 'very_hard' },
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
