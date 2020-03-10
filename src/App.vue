<template>
  <div id="app">
    <nav>
      <router-link to="/" class="link">Главное меню</router-link>
      <router-link to="/game" class="link">Текущая игра</router-link>
      <router-link to="/about" class="link">Об игре</router-link>
    </nav>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  justify-items: center;
}
nav .link {
  text-decoration: none;
  color: black;
}
</style>
