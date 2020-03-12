
export default {
  actions: {},
  mutations: {
  },
  state: {
    enemies: [
      {
        x: 8,
        y: 4,
        glyph: {
          ch: 'e', color: 'red',
        }
      }
    ],
  },
  getters: {
    isEnemyInPosition(state) {
      return (x, y) => state.enemies.some(e => e.x == x && e.y == y);
    },
  }
};
