import { writable } from 'svelte/store';
import Coord from '$lib/coord';
import { Mode } from '$lib/mode';

export interface Game {
  m: number,
  n: number,
  tiles: Map<number, boolean>,
}

function createGame(m: number, n: number, coords: Array<Coord>) {
  const tiles = new Map();
  for (const coord of coords) {
    tiles.set(`${coord.i}_${coord.j}`, false);
  }
  const game: Game = {
    m,
    n,
    tiles,
  };
	const { subscribe, update } = writable(game);

	return {
		subscribe,
		toggle: (coord: Coord) => {
      console.log('toggle', coord);
      update((game: Game) => {
        const current = light(game, coord);
        game.tiles.set(`${coord.i}_${coord.j}`, !current);
        return game;
      });
    },
	};
}

export function member(game: Game, coord: Coord) {
  return game.tiles.has(`${coord.i}_${coord.j}`);
}

export function light(game: Game, coord: Coord) {
  return game.tiles.get(`${coord.i}_${coord.j}`) === true;
}

export function createGameFromMode(mode: Mode) {
  const { m, n, tiles } = mode;
  return createGame(m, n, tiles);
}

function allTilesInState(game: Game, state: boolean) {
  for (const val of game.tiles.values()) {
    if (val !== state) {
      return false;
    }
  }
  return true;
}

export function solvedForDarkness(game: Game): boolean {
  return allTilesInState(game, false);
}

export function solvedForLight(game: Game): boolean {
  return allTilesInState(game, true);
}
