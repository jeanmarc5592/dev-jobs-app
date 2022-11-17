<template>
  <the-header :headerInnerStyles="headerInnerStyles">
    <slot name="header"></slot>
  </the-header>
  <main class="main-container">
    <slot></slot>
  </main>
  <footer :style="footerContainerInlineStyles" class="footer-container">
    <div class="footer-inner-container">
      <slot name="footer"></slot>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "../common/components/TheHeader.vue";

export default {
  props: {
    headerInnerStyles: {
      type: Object,
    },
  },
  components: {
    TheHeader,
  },
  computed: {
    ...mapGetters(["currentThemeMode"]),
    footerContainerInlineStyles() {
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
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  max-width: 1280px;
  margin: 100px auto 80px auto;

  @media only screen and (max-width: 1280px) {
    padding: 0 2rem;
  }
}

.footer-container {
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;

  .footer-inner-container {
    max-width: 1280px;
    margin: 0 auto;

    @media only screen and (max-width: 1280px) {
      padding: 0 2rem;
    }
  }
}
</style>
