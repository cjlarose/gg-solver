import Coord from '$lib/coord';

export type ModeName = 'easy' | 'medium' | 'hard';
export interface Mode {
  m: number,
  n: number,
  tiles: Array<Coord>,
};

const EASY_MODE: Mode = {
  m: 3,
  n: 5,
  tiles: [
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
  ],
};

const MEDIUM_MODE: Mode = {
  m: 7,
  n: 6,
  tiles: [
    { i: 1, j: 1 },
    { i: 1, j: 2 },
    { i: 1, j: 3 },
    { i: 2, j: 1 },
    { i: 2, j: 2 },
    { i: 2, j: 3 },
    { i: 2, j: 4 },
    { i: 3, j: 0 },
    { i: 3, j: 1 },
    { i: 3, j: 2 },
    { i: 3, j: 3 },
    { i: 3, j: 4 },
    { i: 4, j: 1 },
    { i: 4, j: 2 },
    { i: 4, j: 3 },
    { i: 4, j: 4 },
    { i: 5, j: 1 },
    { i: 5, j: 2 },
    { i: 5, j: 3 },
  ],
};

const HARD_MODE: Mode = {
  m: 7,
  n: 8,
  tiles: [
    { i: 0, j: 2 },
    { i: 0, j: 3 },
    { i: 0, j: 4 },
    { i: 0, j: 5 },
    { i: 1, j: 1 },
    { i: 1, j: 2 },
    { i: 1, j: 3 },
    { i: 1, j: 4 },
    { i: 1, j: 5 },
    { i: 2, j: 1 },
    { i: 2, j: 2 },
    { i: 2, j: 3 },
    { i: 2, j: 4 },
    { i: 2, j: 5 },
    { i: 2, j: 6 },
    { i: 3, j: 0 },
    { i: 3, j: 1 },
    { i: 3, j: 2 },
    { i: 3, j: 3 },
    { i: 3, j: 4 },
    { i: 3, j: 5 },
    { i: 3, j: 6 },
    { i: 4, j: 1 },
    { i: 4, j: 2 },
    { i: 4, j: 3 },
    { i: 4, j: 4 },
    { i: 4, j: 5 },
    { i: 4, j: 6 },
    { i: 5, j: 1 },
    { i: 5, j: 2 },
    { i: 5, j: 3 },
    { i: 5, j: 4 },
    { i: 5, j: 5 },
    { i: 6, j: 2 },
    { i: 6, j: 3 },
    { i: 6, j: 4 },
    { i: 6, j: 5 },
  ],
}

export function tilesForMode(mode: ModeName): Mode {
  switch (mode) {
    case 'easy':
      return EASY_MODE;
    case 'medium':
      return MEDIUM_MODE;
    case 'hard':
      return HARD_MODE;
  }
}
