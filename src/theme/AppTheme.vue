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
          colorFocusPrimary: "#5964E0",
          borderFocusPrimary: "1px solid transparent",
          // INFO
          textColorInfo: "#5964E0",
          textColorHoverInfo: "#5964E0",
          textColorPressedInfo: "#5964E0",
          textColorFocusInfo: "#5964E0",
          colorFocusInfo: "#EEEEFC",
          borderFocusInfo: "1px solid transparent",
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
          border: "1px solid transparent",
        },
        Switch: {
          railColor: "#FFF",
          railColorActive: "#FFF",
          buttonColor: "#5964E0",
          boxShadowFocus: "none",
        },
        Checkbox: {
          textColor: "#19202D",
        },
      };
    },
    darkThemeOverrides() {
      return {
        common: {
          // PRIMARY
          primaryColor: "#5964E0",
          primaryColorHover: "#939BF4",
          primaryColorPressed: "#5964E0",
          // INFO
          infoColor: "#313642",
          infoColorHover: "#6A6E76",
          infoColorPressed: "#313642",
        },
        Button: {
          textColorPrimary: "#FFF",
          textColorHoverPrimary: "#FFF",
          textColorPressedPrimary: "#FFF",
          textColorFocusPrimary: "#FFF",
          colorFocusPrimary: "#5964E0",
          borderFocusPrimary: "1px solid transparent",
          // INFO
          textColorInfo: "#FFF",
          textColorHoverInfo: "#FFF",
          textColorPressedInfo: "#FFF",
          textColorFocusInfo: "#FFF",
          colorFocusInfo: "#313642",
          borderFocusInfo: "1px solid transparent",
        },
        Typography: {
          // HEADLINES
          headerFontSize1: "28px",
          headerFontSize2: "24px",
          headerFontSize3: "20px",
          headerFontSize4: "14px",
          headerTextColor: "#FFF",
          // PARAGRAPHS
          pFontSize: "16px",
          pLineHeight: "26px",
          pTextColor: "#FFF",
        },
        Input: {
          heightMedium: "55px",
          textColor: "#FFF",
          color: "#19202D",
          colorFocus: "#19202D",
        },
        Switch: {
          railColor: "#FFF",
          railColorActive: "#FFF",
          buttonColor: "#5964E0",
          boxShadowFocus: "none",
        },
        Checkbox: {
          textColor: "#19202D",
        },
      };
    },
  },
};
</script>
