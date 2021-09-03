<script lang="ts">
	import GameCard from '../components/GameCard.svelte';
	import { onMount } from 'svelte';
	import { games } from '../stores/games';

	onMount(async () => {
		fetch('https://lanenhanced.sharknoon.de/api/games')
			.then((response) => response.json())
			.then((data) => {
				games.set(data);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

<div class="m-4 grid grid-cols-1 gap-4">
	{#each $games as game}
		<GameCard {game} />
	{/each}
</div>
