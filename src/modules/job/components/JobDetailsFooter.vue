<template>
  <div class="main-container">
    <div class="metadata-container">
      <n-h3>{{ currentJobDetails && currentJobDetails.position }}</n-h3>
      <n-p>{{ currentJobDetails && currentJobDetails.company }}</n-p>
    </div>
    <n-button type="primary">Apply Now</n-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { NP, NH3, NButton } from "naive-ui";

export default {
  components: {
    NP,
    NH3,
    NButton,
  },
  computed: {
    ...mapGetters(["currentJobDetails"]),
  },
};
</script>

<style scoped lang="scss">
.main-container {
  padding: 24px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .metadata-container {
    display: none;

    @media only screen and (min-width: 376px) {
      display: block;
    }
  }

  h3 {
    font-weight: 600;
  }

  p {
    color: #6e8098;
  }

  button {
    width: 100%;

    @media only screen and (min-width: 376px) {
      width: unset;
    }
  }
}
</style>
