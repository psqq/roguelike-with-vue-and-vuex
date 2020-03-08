<template>
  <div id="app">
    <router-link to="/">Главное меню</router-link> |
    <router-link to="/game">Текущая игра</router-link> |
    <router-link to="/about">Об игре</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
