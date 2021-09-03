<script lang="ts">
	import Button from '../components/Button.svelte';
	import type { Game } from '../types/game';
	export let game: Game;
</script>

<div
	class="border border-gray-200 hover:border-transparent hover:text-white hover:shadow rounded-lg p-4 flex flex-row justify-between items-center hover:bg-gradient-to-r from-blue-500 to-green-400"
>
	<div class="mr-2">
		<h1 class="text-2xl">{game.name}</h1>
		<p>{game.description}</p>
	</div>
	<Button>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 mr-2"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
			/>
		</svg>
		Download
	</Button>
</div>
