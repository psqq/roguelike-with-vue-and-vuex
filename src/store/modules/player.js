
export const getters = {
  getPosition: 'getPosition',
};

export const mutations = {
  movePlayer: 'movePlayer',
};

export const vuexModule = {
  actions: {},
  mutations: {
    [mutations.movePlayer]:
      (state, {dx, dy}) => {
        state.position.x += dx;
        state.position.y += dy;
      },
  },
  state: {
    position: {
      x: 3,
      y: 3,
    },
  },
  getters: {
    [getters.getPosition]:
      (state) => {
        return state.position;
      },
  }
};
