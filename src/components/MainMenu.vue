<template>
  <div class="mainmenu">
    <h1>Main menu</h1>
    <span @click="startNewGame" class="btn">Start new game</span>
    <br />
    <br />
    <span>High scores</span>
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
.mainmenu {
  display: grid;
  justify-items: center;
  align-items: center;
}
</style>
