<template>
  <FilterContainer>
    <n-grid-item>
      <n-input
        :value="search"
        @input="updateSearch"
        class="filter-input"
        type="text"
        placeholder="Filter by title, companies, expertise..."
        clearable
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
        clearable
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
      <n-button attr-type="submit" type="primary"> Search </n-button>
    </n-grid-item>
  </FilterContainer>
</template>

<script>
import { NInput, NCheckbox, NButton, NGridItem } from "naive-ui";
import { mapState } from "vuex";
import BaseSearchIcon from "../../../common/components/BaseSearchIcon.vue";
import BaseLocationIcon from "../../../common/components/BaseLocationIcon.vue";
import FilterContainer from "./FilterContainer.vue";

export default {
  components: {
    NInput,
    NButton,
    NCheckbox,
    NGridItem,
    BaseSearchIcon,
    BaseLocationIcon,
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
</style>
