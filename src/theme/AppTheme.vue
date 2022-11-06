<template>
  <n-config-provider
    :theme="theme"
    :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"
  >
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
    theme() {
      return null;
    },
    lightThemeOverrides() {
      return {
        common: {
          // PRIMARY
          primaryColor: "#5964E0",
          primaryColorHover: "#939BF4",
          primaryColorPressed: "#5964E0",
          // INFO
          infoColor: "#EEEEFC",
          infoColorHover: "#C5C7F4",
          infoColorPressed: "#EEEEFC",
        },
        Button: {
          textColorInfo: "#5964E0",
          textColorHoverInfo: "#5964E0",
          textColorPressedInfo: "#5964E0",
        },
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
        Input: {
          heightMedium: "55px",
          textColor: "#19202D",
        },
      };
    },
    darkThemeOverrides() {
      return {};
    },
  },
};
</script>
