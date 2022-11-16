<template>
  <page-layout :headerInnerStyles="headerInnerStyles">
    <template #header>
      <JobDetailCompany />
    </template>
  </page-layout>
</template>

<script>
import PageLayout from "../layouts/PageLayout.vue";
import JobDetailCompany from "../modules/job/components/JobDetailCompany.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    PageLayout,
    JobDetailCompany,
  },
  data() {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    };
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
  },
};
</script>

<style scoped lang="scss"></style>
