<template>
  <div>
    <h1>Main menu</h1>
    <button @click="startGame">Start new game</button>
    <br />
    <br />
    <button>High scores</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import * as game from "../store/modules/game";

export default {
  name: "MainMenu",
  methods: mapMutations([game.mutations.startGame])
};
</script>

<style scoped>
</style>
