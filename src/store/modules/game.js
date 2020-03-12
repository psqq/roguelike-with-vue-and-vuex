
export default {
  actions: {},
  mutations: {
    startGame(state) {
      state.gameStarted = true;
    },
    endGame(state) {
      state.gameStarted = false;
    },
  },
  state: {
    gameStarted: false,
  },
  getters: {
    isGameStarted(state) {
      return state.gameStarted;
    },
  }
};
