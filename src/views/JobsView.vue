<template>
  <page-layout>
    <template #header>
      <TheJobFilters />
    </template>
    <JobCard v-for="job in this.$store.getters.jobsList" :key="job.id" />
  </page-layout>
</template>

<script>
import PageLayout from "../layouts/PageLayout.vue";
import TheJobFilters from "../common/components/TheJobFilters.vue";
import gqlRequest from "../graphql/request";
import { JOBS_VIEW_QUERY } from "../graphql/queries";
import JobCard from "../modules/job/components/JobCard.vue";

export default {
  components: {
    PageLayout,
    TheJobFilters,
    JobCard,
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
          first: 9,
        },
      });
      this.$store.commit("addJobs", response.jobs);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
