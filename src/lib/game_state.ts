import { writable } from 'svelte/store';

interface Coord {
  i: number,
  j: number,
};

interface Game {
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

export function createEasyGame() {
  const tiles: Array<Coord> = [
    { i: 0, j: 1 },
    { i: 0, j: 2 },
    { i: 0, j: 3 },
    { i: 1, j: 0 },
    { i: 1, j: 1 },
    { i: 1, j: 2 },
    { i: 1, j: 3 },
    { i: 2, j: 1 },
    { i: 2, j: 2 },
    { i: 2, j: 3 },
  ];
  return createGame(3, 5, tiles);
}
