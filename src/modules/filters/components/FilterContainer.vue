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
import { mapGetters, mapActions, mapMutations } from "vuex";
import { NGrid } from "naive-ui";

export default {
  components: { NGrid },
  computed: {
    ...mapGetters(["currentThemeMode"]),
    containerInlineStyles() {
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
  methods: {
    ...mapMutations(["resetCurrentPage"]),
    ...mapActions(["loadJobsFromAPI", "addGenericLoadingError"]),
    async filterJobs() {
      try {
        this.resetCurrentPage();
        await this.loadJobsFromAPI({ shouldOverwrite: true });
      } catch (error) {
        this.addGenericLoadingError();
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
