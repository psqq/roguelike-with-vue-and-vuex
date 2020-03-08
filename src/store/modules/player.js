
export const getters = {
  getPosition: 'getPosition',
};

export const vuexModule = {
  actions: {},
  mutations: {
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
