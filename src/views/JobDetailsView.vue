<template>
  <div v-if="currentJobDetails !== null">
    <page-layout :headerInnerStyles="headerInnerStyles">
      <template #header>
        <JobDetailCompany />
      </template>
      <JobDescription />
      <template #footer>
        <JobDetailsFooter />
      </template>
    </page-layout>
  </div>
  <div v-else>
    <page-layout>
      <NoJobData
        title="We couldn't find the data of your job..."
        description="Please refresh the page or return to the jobs overview"
      />
      <n-button @click="routeToOverview" type="primary">
        Back To Overview
      </n-button>
    </page-layout>
  </div>
</template>

<script>
import { NButton } from "naive-ui";
import PageLayout from "../layouts/PageLayout.vue";
import JobDetailCompany from "../modules/job/components/JobDetailCompany.vue";
import JobDescription from "../modules/job/components/JobDescription.vue";
import JobDetailsFooter from "../modules/job/components/JobDetailsFooter.vue";
import NoJobData from "../modules/job/components/NoJobData.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    NButton,
    PageLayout,
    JobDetailCompany,
    JobDescription,
    JobDetailsFooter,
    NoJobData,
  },
  computed: {
    ...mapGetters([
      "currentJobDetails",
      "currentThemeMode",
      "currentScreenDimensions",
    ]),
    headerInnerStyles() {
      const { width } = this.currentScreenDimensions;
      if (width <= 768) {
        return {
          top: "130%",
        };
      }
      return {
        top: "100%",
      };
    },
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
    routeToOverview() {
      this.$router.replace("/jobs");
    },
  },
};
</script>

<style scoped lang="scss"></style>
