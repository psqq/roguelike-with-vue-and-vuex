<template>
  <div>
    <h1>Игра</h1>
    <div v-if="isGameStarted">
      Игра запущена.
    </div>
    <div v-else>
      Игра не запущена.
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getters as gameGetters } from "../store/modules/game";

export default {
  name: "Game",
  computed: mapGetters([gameGetters.isGameStarted])
};
</script>

<style scoped>
</style>
