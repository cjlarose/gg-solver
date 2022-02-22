import Coord from '$lib/coord';

export type ModeName = 'easy' | 'medium';
export interface Mode {
  m: number,
  n: number,
  tiles: Array<Coord>,
};

export function tilesForMode(mode: ModeName): Mode {
  switch (mode) {
    case 'easy':
      return {
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
        ]
      };
    case 'medium':
      return {
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
        ]
      }
  }
}
