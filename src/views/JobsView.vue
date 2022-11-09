<template>
  <page-layout>
    <template #header>
      <TheJobFilters />
    </template>
    <n-grid cols="3" screen-responsive :x-gap="30" :y-gap="65">
      <n-grid-item v-for="job in this.$store.getters.jobsList" :key="job.id">
        <JobCard v-bind="job" />
      </n-grid-item>
    </n-grid>
    <n-space class="button-container" justify="center">
      <n-button @click="loadMoreJobs" class="load-more-button" type="primary">
        Load More</n-button
      >
    </n-space>
  </page-layout>
</template>

<script>
import { NGrid, NGridItem, NButton, NSpace } from "naive-ui";
import PageLayout from "../layouts/PageLayout.vue";
import TheJobFilters from "../common/components/TheJobFilters.vue";
import gqlRequest from "../graphql/request";
import { JOBS_VIEW_QUERY } from "../graphql/queries";
import JobCard from "../modules/job/components/JobCard.vue";

const ITEMS_PER_PAGE = 9;

export default {
  components: {
    NGrid,
    NGridItem,
    NButton,
    NSpace,
    PageLayout,
    TheJobFilters,
    JobCard,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    jobsList() {
      console.log(this.$store.getters.jobsList);
      return "";
    },
  },
  async mounted() {
    try {
      const response = await gqlRequest({
        query: JOBS_VIEW_QUERY,
        variables: {
          first: ITEMS_PER_PAGE,
        },
      });
      this.$store.commit("addJobs", response.jobs);
    } catch (error) {
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
        this.$store.commit("addJobs", response.jobs);
        this.page += 2;
      } catch (error) {
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
