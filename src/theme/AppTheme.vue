<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <slot></slot>
  </n-config-provider>
</template>

<script>
import { NConfigProvider } from "naive-ui";

/**
 * Use this for type hints under js file
 * @type import('naive-ui').GlobalThemeOverrides
 */

export default {
  components: {
    NConfigProvider,
  },
  computed: {
    themeOverrides() {
      return {};
    },
  },
};
</script>
