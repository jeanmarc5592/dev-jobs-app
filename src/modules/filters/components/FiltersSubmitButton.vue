<template>
  <n-button class="button" attr-type="submit" type="primary">
    <span class="hide-on-mobile">Search</span>
    <BaseSearchIcon fillColor="#fff" class="hide-on-desktop" />
  </n-button>
</template>

<script>
import { NButton } from "naive-ui";
import BaseSearchIcon from "../../../common/components/BaseSearchIcon.vue";

export default {
  components: { NButton, BaseSearchIcon },
};
</script>

<style scoped lang="scss">
.button {
  @media only screen and (max-width: 768px) {
    padding: 8px;
  }
}
</style>
