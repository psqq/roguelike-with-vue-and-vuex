
function initialState() {
  return {
    position: {
      x: 3,
      y: 3,
    },
  }
}

export default {
  actions: {},
  mutations: {
    movePlayer(state, { dx, dy }) {
      state.position.x += dx;
      state.position.y += dy;
    },
    resetPlayer(state) {
      const s = initialState()
      Object.keys(s).forEach(key => {
        state[key] = s[key]
      })
    }
  },
  state: initialState,
  getters: {
    getPlayerPosition(state) {
      return state.position;
    },
  }
};
