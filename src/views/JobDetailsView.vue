<template>
  <main>
    <h2>Hello From JobDetailsView</h2>
    <p>{{ currentJobDetails?.company }}</p>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

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
  async created() {
    const jobId = this.$route.params?.jobId || "";
    if (!jobId) {
      return;
    }
    try {
      await this.$store.dispatch("loadJobDetailsFromAPI", { jobId });
    } catch (error) {
      this.$store.dispatch("addGenericLoadingError");
      console.error(error);
    }
  },
  methods: {
    ...mapMutations(["resetCurrentJobDetails"]),
  },
};
</script>
