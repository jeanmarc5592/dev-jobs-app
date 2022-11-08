<template>
  <n-grid class="filter-container" cols="3" :style="containerInlineStyles">
    <n-grid-item>
      <n-input
        class="filter-input"
        type="text"
        placeholder="Filter by title, companies, expertise..."
      >
        <template #prefix>
          <BaseSearchIcon />
        </template>
      </n-input>
    </n-grid-item>
    <n-grid-item>
      <n-input
        class="filter-input"
        type="text"
        placeholder="Filter by location..."
      >
        <template #prefix>
          <BaseLocationIcon />
        </template>
      </n-input>
    </n-grid-item>
    <n-grid-item class="button-container">
      <n-checkbox>Full Time Only</n-checkbox>
      <n-button type="primary">Search</n-button>
    </n-grid-item>
  </n-grid>
</template>

<script>
import { NInput, NCheckbox, NButton, NGrid, NGridItem } from "naive-ui";
import BaseSearchIcon from "./BaseSearchIcon.vue";
import BaseLocationIcon from "./BaseLocationIcon.vue";

export default {
  components: {
    NInput,
    NButton,
    NCheckbox,
    NGrid,
    NGridItem,
    BaseSearchIcon,
    BaseLocationIcon,
  },
  computed: {
    containerInlineStyles() {
      const { currentThemeMode } = this.$store.getters;
      if (currentThemeMode === "light") {
        return {
          backgroundColor: "#fff",
        };
      }
      return {
        backgroundColor: "#19202D",
      };
    },
  },
};
</script>

<style scoped lang="scss">
.filter-container {
  border-radius: 6px;
  width: 100%;

  .filter-input {
    border-right: 1px solid rgba(#19202d, 0.15);
  }

  .button-container {
    display: flex;
    align-items: center;
    padding: 0 12px;

    button {
      margin-left: auto;
    }
  }
}
</style>
