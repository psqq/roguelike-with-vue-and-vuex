import shortid from 'shortid';

export const items = {
  dagger: {
    id: shortid,
    name: 'dagger',
    title: 'Кинжал',
    desctiption: 'Немного увеличивает ваш урон.',
  },
  healthCrystal: {
    id: shortid,
    name: 'healthCrystal',
    title: 'Кристал здоровья',
    desctiption: 'Немного увеличивает ваше здоровье.',
  },
};

export const vuexModule = {
  actions: { },
  mutations: { },
  state: {
    items: Object.values(items),
  },
  getters: {
    allItems(state) {
      return state.items;
    },
  }
};
