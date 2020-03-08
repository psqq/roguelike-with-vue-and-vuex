<template>
  <div>
    <div class="level" v-for="(row, rowIndex) in getCurrentLevel" :key="rowIndex">
      <span v-for="(cell, colIndex) in row" :key="colIndex">
        <template v-if="playerPosition.y == rowIndex && playerPosition.x == colIndex">@</template>
        <template v-else>{{ cell }}</template>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as level from "../store/modules/level";
// import * as player from "../store/modules/player";

export default {
  name: "Level",
  computed: {
    ...mapGetters([level.getters.getCurrentLevel]),
    playerPosition() {
      return this.$store.state.player.position;
    }
  }
};
</script>

<style scoped>
.level {
  font-family: monospace;
}
.level span {
  padding: 0 3px;
}
</style>
