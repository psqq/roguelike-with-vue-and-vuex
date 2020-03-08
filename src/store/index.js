import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import * as items from './modules/items';
import * as game from './modules/game';
import * as level from './modules/level';
import * as player from './modules/player';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    items: items.vuexModule,
    game: game.vuexModule,
    level: level.vuexModule,
    player: player.vuexModule,
  },
  plugins: [createPersistedState()]
});