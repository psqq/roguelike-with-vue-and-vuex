<template>
  <div>
    <h1>Игра</h1>
    <div v-if="isGameStarted">
      Игра запущена.
      <h2>Текущий уровень</h2>
      <Level />
    </div>
    <div v-else>Игра не запущена.</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getters as gameGetters } from "../store/modules/game";

import Level from "./Level";

export default {
  name: "Game",
  computed: mapGetters([gameGetters.isGameStarted]),
  components: {
    Level
  }
};
</script>

<style scoped>
</style>
