<template>
  <div class="wrapper">
    <div class="menu" @click="startNewGame">Начать новую игру</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import * as game from "../store/modules/game";

export default {
  name: "MainMenu",
  methods: {
    ...mapMutations([game.mutations.startGame]),
    startNewGame() {
      this.startGame();
      this.$router.push("/game");
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    ". a a ."
    ". a a .";
}
.menu {
  grid-area: a;
  align-self: center;
  justify-self: center;
  border: 1px solid black;
  cursor: pointer;
  padding: 10px;
}
</style>
