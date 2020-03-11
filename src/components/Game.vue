<template>
  <div class="wrapper">
    <template v-if="isGameStarted">
      <div class="left-bar">
        <div>HP: 100</div>
        <div>Gold: 0</div>
      </div>
      <div class="content">
        <Level />
      </div>
    </template>
    <div class="content" v-else>Игра не запущена.</div>
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
.wrapper {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr repeat(4, auto) 1fr;
  grid-template-rows: 1fr repeat(2, auto) 1fr;
  grid-template-areas:
    ". . . . . ."
    ". l a a r ."
    ". l a a r ."
    ". . . . . .";
}
.content {
  grid-area: a;
  align-self: center;
  justify-self: center;
  border: 1px solid black;
  padding: 10px;
}
.left-bar {
  grid-area: l;
  align-self: center;
  justify-self: center;
  padding: 10px;
}
</style>
