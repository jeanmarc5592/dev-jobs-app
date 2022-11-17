<template>
  <AppTheme>
    <RouterView />
  </AppTheme>
</template>

<script>
import { mapMutations } from "vuex";
import AppTheme from "./theme/AppTheme.vue";

export default {
  components: {
    AppTheme,
  },
  mounted() {
    window.addEventListener("resize", this.updateDimensions);
    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        this.changeThemeMode({ newMode: "dark" });
      } else {
        this.changeThemeMode({ newMode: "light" });
      }
    }
  },
  unmounted() {
    window.removeEventListener("resize", this.updateDimensions);
  },
  methods: {
    ...mapMutations(["updateDimensions", "changeThemeMode"]),
  },
};
</script>
