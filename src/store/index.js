import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import * as items from './modules/items'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    items: items.vuexModule,
  },
  plugins: [createPersistedState()]
});
