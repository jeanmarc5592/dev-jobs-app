<template>
  <FilterContainer>
    <n-grid-item>
      <TextInput inputType="search" />
    </n-grid-item>
    <n-grid-item>
      <TextInput inputType="location" />
    </n-grid-item>
    <n-grid-item class="button-container">
      <n-checkbox :checked="fullTimeOnly" @update-checked="updateFullTimeOnly">
        Full Time Only
      </n-checkbox>
      <n-button attr-type="submit" type="primary"> Search </n-button>
    </n-grid-item>
  </FilterContainer>
</template>

<script>
import { NCheckbox, NButton, NGridItem } from "naive-ui";
import { mapState } from "vuex";
import FilterContainer from "./FilterContainer.vue";
import TextInput from "./FiltersTextInput.vue";

export default {
  components: {
    NButton,
    NCheckbox,
    NGridItem,
    TextInput,
    FilterContainer,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapState({
      search: (state) => state.jobs.filters.search,
      location: (state) => state.jobs.filters.location,
      fullTimeOnly: (state) => state.jobs.filters.fullTimeOnly,
    }),
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
.button-container {
  display: flex;
  align-items: center;
  padding: 0 12px;

  button {
    margin-left: auto;
  }
}
</style>
