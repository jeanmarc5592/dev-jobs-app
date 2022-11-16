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
  },
  unmounted() {
    window.removeEventListener("resize", this.updateDimensions);
  },
  methods: {
    ...mapMutations(["updateDimensions"]),
  },
};
</script>
