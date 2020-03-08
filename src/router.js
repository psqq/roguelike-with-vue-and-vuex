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
];

let base = location.href.slice(location.origin.length, location.href.lastIndexOf("/") + 1);

export default new VueRouter({
  mode: 'history',
  base,
  routes
});
