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
      <n-button @click="filterJobs" type="primary">Search</n-button>
    </n-grid-item>
  </n-grid>
</template>

<script>
import { NInput, NCheckbox, NButton, NGrid, NGridItem } from "naive-ui";
import { mapState } from "vuex";
import BaseSearchIcon from "./BaseSearchIcon.vue";
import BaseLocationIcon from "./BaseLocationIcon.vue";
import gqlRequest from "../../graphql/request";
import {
  FILTER_JOBS_VIEW_QUERY_WITHOUT_CONTRACT,
  FILTER_JOBS_VIEW_QUERY_WITH_CONTRACT,
} from "../../graphql/queries";

const ITEMS_PER_PAGE = 6;

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
    containerInlineStyles() {
      const { currentThemeMode } = this.$store.getters;
      if (currentThemeMode === "light") {
        return {
          backgroundColor: "#fff",
          transition: "all 0.3s",
        };
      }
      return {
        backgroundColor: "#19202D",
        transition: "all 0.3s",
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
    async filterJobs() {
      let query = FILTER_JOBS_VIEW_QUERY_WITHOUT_CONTRACT;
      const filters = this.$store.getters.jobFilters;
      const filterRequestVariables = {
        company: "",
        position: "",
        location: "",
      };
      if (filters.search) {
        filterRequestVariables.company = filters.search;
        filterRequestVariables.position = filters.search;
      }
      if (filters.location) {
        filterRequestVariables.location = filters.location;
      }
      if (filters.fullTimeOnly) {
        query = FILTER_JOBS_VIEW_QUERY_WITH_CONTRACT;
        filterRequestVariables.contract = ["full_time"];
      }
      try {
        const response = await gqlRequest({
          query,
          variables: {
            first: ITEMS_PER_PAGE,
            // skip: this.page * ITEMS_PER_PAGE,
            ...filterRequestVariables,
          },
        });
        const jobs = response?.jobs || [];
        this.$store.commit("overwriteJobs", jobs);
        this.$store.commit("resetError");
        this.page += 1;
      } catch (error) {
        const errorMsg = {
          hasError: true,
          title: "Oops... Something went wrong",
          description: "We couldn't get your jobs. Please try again!",
        };
        this.$store.commit("addError", errorMsg);
        console.error(error);
      }
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
