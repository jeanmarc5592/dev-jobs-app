<template>
  <!-- SEARCH -->
  <n-input
    v-if="inputType === 'search'"
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
  <!-- LOCATION -->
  <n-input
    v-if="inputType === 'location'"
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
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { NInput } from "naive-ui";
import BaseSearchIcon from "../../../common/components/BaseSearchIcon.vue";
import BaseLocationIcon from "../../../common/components/BaseLocationIcon.vue";

export default {
  components: {
    NInput,
    BaseSearchIcon,
    BaseLocationIcon,
  },
  props: {
    inputType: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      search: (state) => state.jobs.filters.search,
      location: (state) => state.jobs.filters.location,
    }),
  },
  methods: {
    ...mapMutations(["updateFilters"]),
    updateSearch(value) {
      this.updateFilters({ search: value });
    },
    updateLocation(value) {
      this.updateFilters({ location: value });
    },
  },
};
</script>

<style scoped lang="scss">
.filter-input {
  border-right: 1px solid rgba(#19202d, 0.15);
}
</style>
