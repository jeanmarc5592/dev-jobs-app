<template>
  <div :style="mainContainerInlineStyles" class="main-container">
    <div class="top-container">
      <div>
        <JobCardMetaData
          :contract="currentJobDetails && currentJobDetails.contract"
          :createdAt="currentJobDetails && currentJobDetails.createdAt"
        />
        <n-h1 class="position">{{
          currentJobDetails && currentJobDetails.position
        }}</n-h1>
        <n-p class="location">{{
          currentJobDetails && currentJobDetails.location
        }}</n-p>
      </div>
      <n-button type="primary">Apply Now</n-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { NP, NH1, NButton } from "naive-ui";
import JobCardMetaData from "./JobCardMetaData.vue";

export default {
  components: {
    NP,
    NH1,
    NButton,
    JobCardMetaData,
  },
  computed: {
    ...mapGetters(["currentJobDetails", "currentThemeMode"]),
    mainContainerInlineStyles() {
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
  },
};
</script>

<style scoped lang="scss">
.main-container {
  margin-top: 214px;
  border-radius: 6px;
  padding: 48px;

  @media only screen and (min-width: 768px) {
    margin-top: 132px;
  }

  .top-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    .position {
      font-weight: 600;
    }
    .location {
      color: #5964e0;
      font-weight: 600;
    }
  }
}
</style>
