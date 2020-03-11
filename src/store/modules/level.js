
function createArenaLevel(w, h) {
  let level = [];
  for (let y = 0; y < h; y++) {
    level[y] = [];
    for (let x = 0; x < w; x++) {
      if (x == 0 || y == 0 || x == w - 1 || y == h - 1) {
        level[y][x] = '#';
      } else {
        level[y][x] = '.';
      }
    }
  }
  return level;
}

export default {
  actions: {},
  mutations: {
    createLevel() { },
  },
  state: {
    currentLevel: 0,
    levels: [
      createArenaLevel(20, 20),
    ],
  },
  getters: {
    getCurrentLevel(state) {
      return state.levels[state.currentLevel];
    },
  }
};
