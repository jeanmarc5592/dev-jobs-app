<template>
  <main>
    <h2>Hello from JobsView</h2>
    <n-h1>H1</n-h1>
    <n-h2>H2</n-h2>
    <n-h3>H3</n-h3>
    <n-h4>H4</n-h4>
    <n-p>Body</n-p>
    <n-button type="primary">Button 1</n-button>
    <n-button type="info">Button 2</n-button>
  </main>
</template>

<script>
import { NP, NH1, NH2, NH3, NH4, NButton } from "naive-ui";

export default {
  components: {
    NP,
    NH1,
    NH2,
    NH3,
    NH4,
    NButton,
  },
};
</script>
