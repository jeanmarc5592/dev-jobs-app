<template>
  <header class="header-container">
    <div class="inner-container">
      <!-- LOGO & SWITCH -->
      <n-space class="inner-top-container" justify="space-between">
        <BaseLogoIcon />
        <n-space>
          <BaseSunIcon />
          <n-switch></n-switch>
          <BaseMoonIcon />
        </n-space>
      </n-space>
      <!-- FILTERS -->
      <n-grid class="inner-bottom-container" cols="3">
        <n-grid-item>
          <n-input
            class="form-input"
            type="text"
            placeholder="Filter by title, companies, expertise..."
          >
            <template #prefix>
              <BaseSearchIcon />
            </template>
          </n-input>
        </n-grid-item>
        <n-grid-item>
          <n-input
            class="form-input"
            type="text"
            placeholder="Filter by location..."
          >
            <template #prefix>
              <BaseLocationIcon />
            </template>
          </n-input>
        </n-grid-item>
        <n-grid-item class="button-container">
          <n-checkbox>Full Time Only</n-checkbox>
          <n-button type="primary">Search</n-button>
        </n-grid-item>
      </n-grid>
    </div>
  </header>
</template>

<script>
import {
  NSpace,
  NSwitch,
  NInput,
  NCheckbox,
  NButton,
  NGrid,
  NGridItem,
} from "naive-ui";
import BaseLogoIcon from "./BaseLogoIcon.vue";
import BaseSunIcon from "./BaseSunIcon.vue";
import BaseMoonIcon from "./BaseMoonIcon.vue";
import BaseSearchIcon from "./BaseSearchIcon.vue";
import BaseLocationIcon from "./BaseLocationIcon.vue";

export default {
  components: {
    NSpace,
    NSwitch,
    NInput,
    NButton,
    NCheckbox,
    NGrid,
    NGridItem,
    BaseLogoIcon,
    BaseSunIcon,
    BaseMoonIcon,
    BaseSearchIcon,
    BaseLocationIcon,
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

  .inner-top-container {
    margin-bottom: 40px;
  }

  .inner-bottom-container {
    background-color: #fff;
    border-radius: 6px;
    width: 100%;

    .form-input {
      border-right: 1px solid rgba(#19202d, 0.15);
    }

    .button-container {
      display: flex;
      align-items: center;
      padding: 0 12px;

      button {
        margin-left: auto;
      }
    }
  }
}
</style>
