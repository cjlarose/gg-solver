import { Game } from '$lib/game_state';
import SolutionWorker from '$lib/solution_worker?worker';

export default class SolutionManager {
  requestId: number;

  constructor() {
    this.requestId = 0;
    this.listeners = {};
    this.worker = undefined;
  }

  initializeWorker() {
    if (this.worker !== undefined) {
      return this.worker;
    }

    this.worker = new SolutionWorker();

    this.worker.addEventListener('message', (e) => {
      const { resolve, reject } = this.listeners[e.data.requestId];
      if (e.data.error !== undefined) {
        reject(e.data.error);
      } else {
        resolve(e.data);
      }
      delete this.listeners[e.data.requestId];
    });

    return this.worker;
  }

  getOptimalSolution(game: Game, goal: string) {
    const worker = this.initializeWorker();

    const myRequestId = this.requestId++;
    const message = { requestId: myRequestId, game, goal };
    worker.postMessage(message);
    return new Promise((resolve, reject) => {
      this.listeners[myRequestId] = { resolve, reject };
    });
  }
}
