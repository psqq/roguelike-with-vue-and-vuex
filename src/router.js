import VueRouter from 'vue-router';
import Vue from 'vue';
import MainMenu from './components/MainMenu.vue';
import About from './components/About.vue';
import Game from './components/Game.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: MainMenu },
  { path: '/about', component: About },
  { path: '/game', component: Game },
]

export default new VueRouter({
  mode: 'history',
  routes
});
