<template>
  <n-h2>We couldn't find any jobs...</n-h2>
  <n-p>Adjust your filters to receive more jobs again!</n-p>
  <n-button type="info">Reset Filters</n-button>
</template>

<script>
import { NH2, NP, NButton } from "naive-ui";

export default {
  components: { NH2, NP, NButton },
};
</script>

<style scoped lang="scss">
p {
  margin-bottom: 1rem;
}
</style>
