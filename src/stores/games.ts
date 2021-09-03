import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Game } from '../types/game';

export const games: Writable<Game[]> = writable(<Game[]>[]);