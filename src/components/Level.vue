<template>
  <div>
    <div class="level" v-for="(row, rowIndex) in getCurrentLevel" :key="rowIndex">
      <span v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as level from "../store/modules/level";

export default {
  name: "Level",
  computed: mapGetters([level.getters.getCurrentLevel])
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
