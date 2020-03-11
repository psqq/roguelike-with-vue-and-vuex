<template>
  <div class="wrapper">
    <div class="menu" @click="startNewGame">Начать новую игру</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "MainMenu",
  methods: {
    ...mapMutations(["startGame"]),
    startNewGame() {
      this.startGame();
      this.$store.commit("resetAll");
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
