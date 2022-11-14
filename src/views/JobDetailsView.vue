<template>
  <main>
    <h2>Hello From JobDetailsView</h2>
    <p>{{ currentJobDetails?.company }}</p>
  </main>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentJobDetails"]),
  },
  beforeRouteLeave(to, from) {
    // Reset "currentJobDetails" when leaving the page
    if (to.fullPath !== from.fullPath) {
      this.resetCurrentJobDetails();
    }
  },
  created() {
    this.loadJobDetails();
  },
  methods: {
    ...mapMutations(["resetCurrentJobDetails"]),
    ...mapActions(["loadJobDetailsFromAPI", "addGenericLoadingError"]),
    async loadJobDetails() {
      const jobId = this.$route.params?.jobId || "";
      if (!jobId) {
        return;
      }
      try {
        await this.loadJobDetailsFromAPI({ jobId });
      } catch (error) {
        this.addGenericLoadingError();
        console.error(error);
      }
    },
  },
};
</script>
