<template>
  <div :style="containerStyles" class="meta-data-container">
    <n-p>{{ transformCreatedAt(createdAt) }}</n-p>
    <n-p>&#8226;</n-p>
    <n-p>{{ contract }}</n-p>
  </div>
</template>

<script>
import { NP } from "naive-ui";

export default {
  props: {
    createdAt: {
      type: [String, null],
      required: true,
      default: "",
    },
    contract: {
      type: [String, null],
      required: true,
    },
    containerStyles: {
      type: Object,
    },
  },
  components: {
    NP,
  },
  computed: {
    transformCreatedAt() {
      // TODO: Optimize Date Display (e.g. "4d ago")
      return (rawDate) => new Date(rawDate).toLocaleDateString();
    },
  },
};
</script>

<style scoped lang="scss">
.meta-data-container {
  display: flex;
  align-items: center;

  p {
    color: #6e8098;

    &:first-of-type {
      margin-right: 8px;
    }
    &:last-of-type {
      margin-left: 8px;
    }
  }
}
</style>
