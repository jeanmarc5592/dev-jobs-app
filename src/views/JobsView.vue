<template>
  <page-layout>
    <template #header>
      <TheJobFilters />
    </template>
  </page-layout>
</template>

<script>
import PageLayout from "../layouts/PageLayout.vue";
import TheJobFilters from "../common/components/TheJobFilters.vue";
import gqlRequest from "../graphql/request";
import { JOBS_VIEW_QUERY } from "../graphql/queries";

export default {
  components: {
    PageLayout,
    TheJobFilters,
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
