<template>
  <n-button attr-type="submit" type="primary">
    <span class="hide-on-mobile">Search</span>
    <BaseSearchIcon class="hide-on-desktop" />
  </n-button>
</template>

<script>
import { NButton } from "naive-ui";
import BaseSearchIcon from "../../../common/components/BaseSearchIcon.vue";

export default {
  components: { NButton, BaseSearchIcon },
};
</script>
