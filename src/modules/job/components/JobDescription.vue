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
    <!-- Description -->
    <n-p class="description">{{
      currentJobDetails && currentJobDetails.description
    }}</n-p>
    <!-- Requirements -->
    <n-h3 class="sub-header">Requirements</n-h3>
    <n-p class="content description">{{
      currentJobDetails && currentJobDetails.requirements?.content
    }}</n-p>
    <n-p
      class="list-item"
      v-for="(requirement, index) in currentJobDetails?.requirements?.items"
      :key="index"
    >
      <span class="list-icon">&#8226;</span>
      <span class="description">{{ requirement }}</span>
    </n-p>
    <!-- Role -->
    <n-h3 class="sub-header">What you will do</n-h3>
    <n-p class="content description">{{
      currentJobDetails && currentJobDetails.role?.content
    }}</n-p>
    <n-p
      class="list-item"
      v-for="(role, index) in currentJobDetails?.role?.items"
      :key="index"
    >
      <span class="list-icon">{{ index + 1 }}</span>
      <span class="description">{{ role }}</span>
    </n-p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { NP, NH1, NH3, NButton } from "naive-ui";
import JobCardMetaData from "./JobCardMetaData.vue";

export default {
  components: {
    NP,
    NH1,
    NH3,
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
  margin-bottom: 64px;
  border-radius: 6px;
  padding: 24px;

  @media only screen and (min-width: 768px) {
    padding: 48px;
    margin-top: 132px;
    margin-bottom: 80px;
  }

  .list-item {
    display: flex;
    width: 100%;
    margin-bottom: 8px;
    .list-icon {
      color: #5964e0;
      font-weight: 600;
      margin-right: 16px;

      @media only screen and (min-width: 768px) {
        margin-right: 32px;
      }
    }
  }

  .content {
    margin-bottom: 16px;
    color: #6e8098;
  }

  .description {
    color: #6e8098;
  }

  .sub-header {
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 28px;
  }

  .top-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40px;

    button {
      width: 100%;
      margin-top: 50px;
    }

    h1 {
      font-size: 20px;
    }

    @media only screen and (min-width: 376px) {
      flex-direction: row;
      align-items: center;

      button {
        width: unset;
        margin-top: 0;
      }

      h1 {
        font-size: 28px;
      }
    }
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
