<template>
  <header class="header-container">
    <div class="inner-container">
      <!-- LOGO & SWITCH -->
      <n-space class="inner-top-container" justify="space-between">
        <BaseLogoIcon />
        <n-space>
          <BaseSunIcon />
          <n-switch
            :value="this.$store.getters.currentThemeMode"
            checked-value="dark"
            unchecked-value="light"
            @update:value="updateThemeMode"
          ></n-switch>
          <BaseMoonIcon />
        </n-space>
      </n-space>
      <!-- SLOT -->
      <slot></slot>
    </div>
  </header>
</template>

<script>
import { NSpace, NSwitch } from "naive-ui";
import BaseLogoIcon from "./BaseLogoIcon.vue";
import BaseSunIcon from "./BaseSunIcon.vue";
import BaseMoonIcon from "./BaseMoonIcon.vue";

export default {
  components: {
    NSpace,
    NSwitch,
    BaseLogoIcon,
    BaseSunIcon,
    BaseMoonIcon,
  },
  methods: {
    updateThemeMode(newMode) {
      this.$store.commit("changeThemeMode", { newMode });
    },
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  @media only screen and (min-width: 768px) {
    background-image: url("../../assets/icons/bg-header-desktop.svg");
    height: 160px;
  }

  @media only screen and (min-width: 375px) and (max-width: 768px) {
    background-image: url("../../assets/icons/bg-header-tablet.svg");
    height: 160px;
  }

  @media only screen and (max-width: 375px) {
    background-image: url("../../assets/icons/bg-header-mobile.svg");
    height: 136px;
  }
}

.inner-container {
  max-width: 1280px;
  margin: 0 auto;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 75%;
  width: 100%;

  @media only screen and (max-width: 1280px) {
    padding: 0 2rem;
  }
  .inner-top-container {
    margin-bottom: 40px;
  }
}
</style>
