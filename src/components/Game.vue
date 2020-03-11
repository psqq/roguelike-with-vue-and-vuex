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
      <div class="right-bar">
        <div class="btn" @click="quit">Закночить игру</div>
      </div>
    </template>
    <div class="content" v-else>
      Игра не запущена.
      <div class="btn" @click="back">Вернуться в главное меню</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Level from "./Level";

export default {
  name: "Game",
  computed: mapGetters(["isGameStarted"]),
  methods: {
    ...mapMutations(["endGame"]),
    quit() {
      this.endGame();
      this.$router.push("/");
    },
    back() {
      this.$router.push("/");
    }
  },
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
  border-left: 1px solid black;
  padding-left: 15px;
  border-right: 1px solid black;
  padding-right: 15px;
}
.left-bar {
  grid-area: l;
  align-self: center;
  justify-self: center;
  padding: 10px;
}
.right-bar {
  grid-area: r;
  align-self: center;
  justify-self: center;
  padding: 10px;
}
.btn {
  align-self: center;
  justify-self: center;
  border: 1px solid black;
  cursor: pointer;
  padding: 5px;
  margin: 5px;
}
</style>
