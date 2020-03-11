<template>
  <div>
    <div class="level" v-for="(row, rowIndex) in getCurrentLevel" :key="rowIndex">
      <span v-for="(cell, colIndex) in row" :key="colIndex">{{ getCellSymbol(colIndex, rowIndex) }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Level",
  created() {
    window.addEventListener("keydown", this.handleKeyboardEvent);
  },
  destroyed() {
    window.removeEventListener("keydown", this.handleKeyboardEvent);
  },
  methods: {
    ...mapMutations(["movePlayer"]),
    handleKeyboardEvent(e) {
      if (["Numpad6", "KeyD"].includes(e.code)) {
        this.movePlayer({ dx: 1, dy: 0 });
      }
      if (["Numpad4", "KeyA"].includes(e.code)) {
        this.movePlayer({ dx: -1, dy: 0 });
      }
      if (["Numpad8", "KeyW"].includes(e.code)) {
        this.movePlayer({ dx: 0, dy: -1 });
      }
      if (["Numpad2", "KeyS"].includes(e.code)) {
        this.movePlayer({ dx: 0, dy: 1 });
      }
    },
    getCellSymbol(x, y) {
      if (this.playerPosition.x == x && this.playerPosition.y == y) {
        return "@";
      } else if (this.isEnemyInPosition(x, y)) {
        return "e";
      }
      return ".";
    }
  },
  computed: {
    ...mapGetters(["getCurrentLevel"]),
    ...mapGetters(["isEnemyInPosition"]),
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
