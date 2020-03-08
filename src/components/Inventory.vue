<template>
  <div class="inventory">
    <div v-for="(item, index) in inventoryItems" :key="index">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Inventory",
  props: {
    items: Array
  },
  computed: {
    inventoryItems: function() {
      return [];
    }
  }
};
</script>

<style scoped>
</style>
