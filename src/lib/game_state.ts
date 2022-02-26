import { writable } from 'svelte/store';
import Coord from '$lib/coord';
import { Mode } from '$lib/mode';

export interface Game {
  m: number,
  n: number,
  board: Set<string>,
  onTiles: Set<string>,
}

function createGame(m: number, n: number, coords: Array<Coord>) {
  const board: Set<string> = new Set();
  for (const coord of coords) {
    board.add(`${coord.i}_${coord.j}`);
  }
  const game: Game = {
    m,
    n,
    board,
    onTiles: new Set(),
  };
	const { subscribe, update } = writable(game);

	return {
		subscribe,
		toggle: (coord: Coord) => {
      update((game: Game) => {
        if (light(game, coord)) {
          game.onTiles.delete(`${coord.i}_${coord.j}`);
        } else {
          game.onTiles.add(`${coord.i}_${coord.j}`);
        }
        return game;
      });
    },
	};
}

export function member(game: Game, coord: Coord) {
  return game.board.has(`${coord.i}_${coord.j}`);
}

export function light(game: Game, coord: Coord) {
  return game.onTiles.has(`${coord.i}_${coord.j}`);
}

export function createGameFromMode(mode: Mode) {
  const { m, n, tiles } = mode;
  return createGame(m, n, tiles);
}

export function solvedForDarkness(game: Game): boolean {
  return game.onTiles.size == 0;
}

export function solvedForLight(game: Game): boolean {
  return game.onTiles.size == game.board.size;
}
