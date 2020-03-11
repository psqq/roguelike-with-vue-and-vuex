import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import items from './modules/items';
import game from './modules/game';
import level from './modules/level';
import player from './modules/player';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    items,
    game,
    level,
    player,
  },
  plugins: [createPersistedState()]
});
