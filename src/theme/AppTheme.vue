<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <slot></slot>
  </n-config-provider>
</template>

<script>
import { NConfigProvider } from "naive-ui";

export default {
  components: {
    NConfigProvider,
  },
  computed: {
    themeOverrides() {
      return {
        Typography: {
          // HEADLINES
          headerFontSize1: "28px",
          headerFontSize2: "24px",
          headerFontSize3: "20px",
          headerFontSize4: "14px",
          headerTextColor: "#19202D",
          // PARAGRAPHS
          pFontSize: "16px",
          pLineHeight: "26px",
          pTextColor: "#19202D",
        },
      };
    },
  },
};
</script>
