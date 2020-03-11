
export const getters = {
  isGameStarted: 'isGameStarted',
};

export const mutations = {
  startGame: 'startGame',
};

export const vuexModule = {
  actions: {},
  mutations: {
    [mutations.startGame]:
      (state) => {
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
    [getters.isGameStarted]:
      (state) => {
        return state.gameStarted;
      },
  }
};
