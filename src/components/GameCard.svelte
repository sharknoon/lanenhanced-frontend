<script lang="ts">
	import type { Game } from '../types/game';
	export let game: Game;
</script>

<div
	class="bg-gray-100 rounded-lg p-4 flex flex-row justify-between items-center hover:bg-gray-200 transition"
>
	<div class="mr-2">
		<h1 class="text-2xl">{game.name}</h1>
		<p>{game.description}</p>
	</div>
	<button
		class="leading-6 bg-indigo-700 hover:bg-indigo-800 text-white p-3 rounded-lg focus:ring ring-indigo-700 ring-offset-2 transition flex flex-row"
	>
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
	</button>
</div>
