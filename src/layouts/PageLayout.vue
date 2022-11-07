<template>
  <div class="page-container">
    <TheHeader />
    <main class="main-container">
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
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
.page-container {
  max-width: 1440px;
  margin: 0 auto;
}

.main-container {
  max-width: 1110px;
  margin: 0 auto;
}
</style>
