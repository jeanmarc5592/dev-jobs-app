<template>
  <!-- DESKTOP & TABLET VIEW -->
  <div class="desktop-view">
    <div
      :style="companyContainerInlineStyles"
      class="company-container-desktop"
    >
      <div :style="logoContainerInlineStyles" class="logo-container-desktop">
        <img
          class="logo-desktop"
          :src="currentJobDetails && currentJobDetails.logo?.url"
        />
      </div>
      <div class="details-container-desktop">
        <div>
          <n-h2>{{ currentJobDetails && currentJobDetails.company }}</n-h2>
          <n-p>{{ currentJobDetails && currentJobDetails.website }}</n-p>
        </div>
        <n-button type="info">Company Site</n-button>
      </div>
    </div>
  </div>
  <!-- MOBILE VIEW -->
  <div class="mobile-view">
    <div :style="companyContainerInlineStyles" class="company-container-mobile">
      <div :style="logoContainerInlineStyles" class="logo-container-mobile">
        <n-image :src="currentJobDetails && currentJobDetails.logo?.url" />
      </div>
      <div class="details-container-mobile">
        <n-h2>{{ currentJobDetails && currentJobDetails.company }}</n-h2>
        <n-p>{{ currentJobDetails && currentJobDetails.website }}</n-p>
        <n-button type="info">Company Site</n-button>
      </div>
    </div>
  </div>
</template>

<script>
import { NH2, NP, NButton, NImage } from "naive-ui";
import { mapGetters } from "vuex";

export default {
  components: {
    NH2,
    NP,
    NButton,
    NImage,
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
h2 {
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    margin-bottom: 12px;
  }
}

p {
  color: #6e8098;

  @media only screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
}
.desktop-view {
  display: none;
  @media only screen and (min-width: 768px) {
    display: inherit;
  }
  .company-container-desktop {
    display: flex;
    border-radius: 6px;
    .logo-container-desktop {
      height: 140px;
      width: 140px;
      border-radius: 6px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo-desktop {
        width: 60px;
      }
    }

    .details-container-desktop {
      width: 100%;
      padding: 34px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.mobile-view {
  display: inherit;
  @media only screen and (min-width: 768px) {
    display: none;
  }

  .company-container-mobile {
    border-radius: 6px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo-container-mobile {
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .details-container-mobile {
      padding: 32px;
      padding-top: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
