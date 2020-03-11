
export default {
  actions: {},
  mutations: {
    movePlayer(state, { dx, dy }) {
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
    getPlayerPosition(state) {
      return state.position;
    },
  }
};
