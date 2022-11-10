<template>
  <page-layout>
    <template #header>
      <TheJobFilters />
    </template>
    <n-grid
      v-if="!error.hasError"
      cols="3"
      screen-responsive
      :x-gap="30"
      :y-gap="65"
    >
      <n-grid-item v-for="job in this.$store.getters.jobsList" :key="job.id">
        <JobCard v-bind="job" />
      </n-grid-item>
    </n-grid>
    <n-space
      v-if="loadMoreBtnIsRendered"
      class="button-container"
      justify="center"
    >
      <n-button @click="loadMoreJobs" class="load-more-button" type="primary">
        Load More</n-button
      >
    </n-space>
    <n-alert v-if="error.hasError" type="error" :title="error.title">
      {{ error.description }}
    </n-alert>
  </page-layout>
</template>

<script>
import { NGrid, NGridItem, NButton, NSpace, NAlert } from "naive-ui";
import PageLayout from "../layouts/PageLayout.vue";
import TheJobFilters from "../common/components/TheJobFilters.vue";
import gqlRequest from "../graphql/request";
import { JOBS_VIEW_QUERY } from "../graphql/queries";
import JobCard from "../modules/job/components/JobCard.vue";

const ITEMS_PER_PAGE = 6;

export default {
  components: {
    NGrid,
    NGridItem,
    NButton,
    NSpace,
    NAlert,
    PageLayout,
    TheJobFilters,
    JobCard,
  },
  data() {
    return {
      page: 0,
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    loadMoreBtnIsRendered() {
      const { hasNextPage, jobsListLength, error } = this.$store.getters;
      return hasNextPage && !error.hasError && jobsListLength > 0;
    },
  },
  async mounted() {
    try {
      const response = await gqlRequest({
        query: JOBS_VIEW_QUERY,
        variables: {
          first: ITEMS_PER_PAGE,
          skip: this.page * ITEMS_PER_PAGE,
        },
      });
      const jobs = response.jobs || [];
      const hasNextPage =
        response.jobsConnection?.pageInfo?.hasNextPage || false;
      this.$store.commit("addJobs", jobs);
      this.$store.commit("resetError");
      this.$store.commit("addHasNextPage", hasNextPage);
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
  methods: {
    async loadMoreJobs() {
      try {
        const response = await gqlRequest({
          query: JOBS_VIEW_QUERY,
          variables: {
            first: ITEMS_PER_PAGE,
            skip: this.page * ITEMS_PER_PAGE,
          },
        });
        const jobs = response?.jobs || [];
        const hasNextPage =
          response.jobsConnection?.pageInfo?.hasNextPage || false;
        this.$store.commit("addJobs", jobs);
        this.$store.commit("resetError");
        this.$store.commit("addHasNextPage", hasNextPage);
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
.button-container {
  margin-top: 56px;
}
</style>
