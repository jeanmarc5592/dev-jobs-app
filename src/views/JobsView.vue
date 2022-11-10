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
      <n-button @click="loadJobs" class="load-more-button" type="primary">
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
import JobCard from "../modules/job/components/JobCard.vue";

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
  computed: {
    error() {
      return this.$store.getters.error;
    },
    loadMoreBtnIsRendered() {
      const { hasNextPage, jobsListLength, error } = this.$store.getters;
      return hasNextPage && !error.hasError && jobsListLength > 0;
    },
  },
  mounted() {
    this.loadJobs();
  },
  methods: {
    async loadJobs() {
      try {
        await this.$store.dispatch("loadJobsFromAPI");
      } catch (error) {
        this.$store.dispatch("addGenericLoadingError");
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
