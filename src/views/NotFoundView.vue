<template>
  <div class="main-container">
    <n-h2>404</n-h2>
    <n-h1>PAGE NOT FOUND!</n-h1>
    <n-h3>Sorry, the page you're looking for doesn't exist.</n-h3>
    <n-button @click="routeToOverview" type="primary">
      Back To Overview
    </n-button>
  </div>
</template>

<script>
import { NH1, NH3, NH2, NButton } from "naive-ui";

export default {
  components: {
    NH1,
    NH3,
    NH2,
    NButton,
  },
  methods: {
    routeToOverview() {
      this.$router.replace("/jobs");
    },
  },
};
</script>

<style scoped lang="scss">
.main-container {
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;

  h1 {
    font-weight: 600;
  }

  h2 {
    font-size: 100px;
    font-weight: 600;
    color: #5964e0;
  }

  h3 {
    text-align: center;
    color: #9daec2;
    margin-bottom: 60px;
  }
}
</style>
