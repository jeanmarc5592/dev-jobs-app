<template>
  <page-layout>
    <template #header>
      <TheJobFilters />
    </template>
    <n-grid
      v-if="jobGridIsRendered"
      cols="3"
      screen-responsive
      :x-gap="30"
      :y-gap="65"
    >
      <n-grid-item v-for="job in this.$store.getters.jobsList" :key="job.id">
        <JobCard v-bind="job" />
      </n-grid-item>
    </n-grid>
    <NoJobs v-else />
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
import { mapGetters } from "vuex";
import { NGrid, NGridItem, NButton, NSpace, NAlert } from "naive-ui";
import PageLayout from "../layouts/PageLayout.vue";
import TheJobFilters from "../common/components/TheJobFilters.vue";
import JobCard from "../modules/job/components/JobCard.vue";
import NoJobs from "../modules/job/components/NoJobs.vue";

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
    NoJobs,
  },
  computed: {
    ...mapGetters(["error", "jobsListLength", "hasNextPage"]),
    error() {
      return this.$store.getters.error;
    },
    jobGridIsRendered() {
      return !this.error.hasError && this.jobsListLength > 0;
    },
    loadMoreBtnIsRendered() {
      return (
        this.hasNextPage && !this.error.hasError && this.jobsListLength > 0
      );
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
