<template>
  <n-grid class="filter-container" cols="3" :style="containerInlineStyles">
    <n-grid-item>
      <n-input
        :value="search"
        @input="updateSearch"
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
        :value="location"
        @input="updateLocation"
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
      <n-checkbox :checked="fullTimeOnly" @update-checked="updateFullTimeOnly">
        Full Time Only
      </n-checkbox>
      <n-button type="primary">Search</n-button>
    </n-grid-item>
  </n-grid>
</template>

<script>
import { NInput, NCheckbox, NButton, NGrid, NGridItem } from "naive-ui";
import { mapState } from "vuex";
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
    ...mapState({
      search: (state) => state.jobs.filters.search,
      location: (state) => state.jobs.filters.location,
      fullTimeOnly: (state) => state.jobs.filters.fullTimeOnly,
    }),
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
  methods: {
    updateSearch(value) {
      this.$store.commit("updateFilters", { search: value });
    },
    updateLocation(value) {
      this.$store.commit("updateFilters", { location: value });
    },
    updateFullTimeOnly(value) {
      this.$store.commit("updateFilters", { fullTimeOnly: value });
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
