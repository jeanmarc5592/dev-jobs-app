<template>
  <div :style="mainContainerInlineStyles" class="main-container">
    <div>
      <div>
        <JobCardMetaData
          :contract="currentJobDetails && currentJobDetails.contract"
          :createdAt="currentJobDetails && currentJobDetails.createdAt"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import JobCardMetaData from "./JobCardMetaData.vue";

export default {
  components: {
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
}
</style>
