<template>
  <form @submit.prevent="filterJobs">
    <n-grid
      class="filter-container"
      cols="3"
      responsive="screen"
      :style="containerInlineStyles"
    >
      <slot></slot>
    </n-grid>
  </form>
</template>

<script>
import { NGrid } from "naive-ui";

export default {
  components: { NGrid },
  computed: {
    containerInlineStyles() {
      const { currentThemeMode } = this.$store.getters;
      if (currentThemeMode === "light") {
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
  methods: {
    async filterJobs() {
      try {
        this.$store.commit("resetCurrentPage");
        await this.$store.dispatch("loadJobsFromAPI", {
          shouldOverwrite: true,
        });
      } catch (error) {
        this.$store.dispatch("addGenericLoadingError");
        console.error(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.filter-container {
  border-radius: 6px;
  width: 100%;
}
</style>
