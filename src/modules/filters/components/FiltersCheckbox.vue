<template>
  <n-checkbox :checked="fullTimeOnly" @update-checked="updateFullTimeOnly">
    Full Time Only
  </n-checkbox>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { NCheckbox } from "naive-ui";

export default {
  components: { NCheckbox },
  computed: {
    ...mapState({
      fullTimeOnly: (state) => state.jobs.filters.fullTimeOnly,
    }),
  },
  methods: {
    ...mapMutations(["updateFilters"]),
    updateFullTimeOnly(value) {
      this.updateFilters({ fullTimeOnly: value });
    },
  },
};
</script>
