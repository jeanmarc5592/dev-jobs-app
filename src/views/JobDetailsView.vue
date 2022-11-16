<template>
  <page-layout :headerInnerStyles="headerInnerStyles">
    <template #header>
      <div :style="companyContainerInlineStyles" class="company-container">
        <div :style="logoContainerInlineStyles" class="logo-container">
          <img
            class="logo"
            :src="currentJobDetails && currentJobDetails.logo.url"
          />
        </div>
      </div>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from "../layouts/PageLayout.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    PageLayout,
  },
  computed: {
    ...mapGetters(["currentJobDetails", "currentThemeMode"]),
    companyContainerInlineStyles() {
      if (this.currentThemeMode === "light") {
        return {
          backgroundColor: "#fff",
          transition: "all 0.3s",
        };
      }
      return {
        backgroundColor: "#19202D",
        transition: "all 0.3s",
      };
    },
    logoContainerInlineStyles() {
      if (!this.currentJobDetails) return;
      return {
        backgroundColor: this.currentJobDetails.logoBackground,
      };
    },
    headerInnerStyles() {
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

<style scoped lang="scss">
.company-container {
  border-radius: 6px;
  .logo-container {
    height: 140px;
    width: 140px;
    border-radius: 6px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      width: 60px;
    }
  }
}
</style>
