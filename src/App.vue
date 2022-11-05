<template>
  <AppTheme>
    <RouterView />
  </AppTheme>
</template>

<script>
import AppTheme from "./theme/AppTheme.vue";

export default {
  components: {
    AppTheme,
  },
};
</script>
