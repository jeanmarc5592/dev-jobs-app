<template>
  <n-h2>{{ title }}</n-h2>
  <n-p>{{ description }}</n-p>
</template>

<script>
import { NH2, NP } from "naive-ui";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  components: { NH2, NP },
};
</script>

<style scoped lang="scss">
p {
  margin-bottom: 1rem;
}
</style>
