<template>
  <page-layout>
    <template #header>
      <JobFilters />
    </template>
    <n-grid
      v-if="jobGridIsRendered"
      cols="3 xs:1 s:2 m:3 l:3 xl:3"
      responsive="screen"
      :x-gap="30"
      :y-gap="65"
    >
      <n-grid-item v-for="job in jobsList" :key="job.id">
        <JobCard v-bind="job" />
      </n-grid-item>
    </n-grid>
    <NoJobData
      title="We couldn't find any jobs..."
      description="Adjust your filters to receive more jobs again!"
      v-else-if="!firstLoading"
    />
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
import { mapGetters, mapActions, mapMutations } from "vuex";
import { NGrid, NGridItem, NButton, NSpace, NAlert } from "naive-ui";
import PageLayout from "../layouts/PageLayout.vue";
import JobFilters from "../modules/filters/components/JobFilters.vue";
import JobCard from "../modules/job/components/JobCard.vue";
import NoJobData from "../modules/job/components/NoJobData.vue";

export default {
  components: {
    NGrid,
    NGridItem,
    NButton,
    NSpace,
    NAlert,
    PageLayout,
    JobFilters,
    JobCard,
    NoJobData,
  },
  computed: {
    ...mapGetters([
      "error",
      "jobsListLength",
      "hasNextPage",
      "firstLoading",
      "jobsList",
    ]),
    jobGridIsRendered() {
      return !this.error.hasError && this.jobsListLength > 0;
    },
    loadMoreBtnIsRendered() {
      return (
        this.hasNextPage && !this.error.hasError && this.jobsListLength > 0
      );
    },
  },
  created() {
    if (this.firstLoading) {
      this.loadJobs();
    }
  },
  methods: {
    ...mapMutations(["resetCurrentPage"]),
    ...mapActions(["loadJobsFromAPI", "addGenericLoadingError"]),
    async loadJobs() {
      try {
        await this.loadJobsFromAPI();
      } catch (error) {
        this.addGenericLoadingError();
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
