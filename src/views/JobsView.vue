<template>
  <page-layout>
    <template #header>
      <TheJobFilters />
    </template>
  </page-layout>
</template>

<script>
import PageLayout from "../layouts/PageLayout.vue";
import TheJobFilters from "../common/components/TheJobFilters.vue";

export default {
  components: {
    PageLayout,
    TheJobFilters,
  },
};
</script>
