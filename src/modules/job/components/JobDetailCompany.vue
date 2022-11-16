<template>
  <div :style="companyContainerInlineStyles" class="company-container">
    <div :style="logoContainerInlineStyles" class="logo-container">
      <img
        class="logo"
        :src="currentJobDetails && currentJobDetails.logo.url"
      />
    </div>
    <div class="details-container">
      <div>
        <n-h2>{{ currentJobDetails && currentJobDetails.company }}</n-h2>
        <n-p>{{ currentJobDetails && currentJobDetails.website }}</n-p>
      </div>
      <n-button type="info">Company Site</n-button>
    </div>
  </div>
</template>

<script>
import { NH2, NP, NButton } from "naive-ui";
import { mapGetters } from "vuex";

export default {
  components: {
    NH2,
    NP,
    NButton,
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
  },
};
</script>

<style scoped lang="scss">
.company-container {
  display: flex;
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

  .details-container {
    width: 100%;
    padding: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 700;
    }

    p {
      color: #6e8098;
    }
  }
}
</style>
