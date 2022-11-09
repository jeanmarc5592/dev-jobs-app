<template>
  <the-header>
    <slot name="header"></slot>
  </the-header>
  <main class="main-container">
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<script>
import TheHeader from "../common/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  max-width: 1280px;
  margin: 80px auto 0 auto;

  @media only screen and (max-width: 1280px) {
    padding: 0 2rem;
  }
}
</style>
