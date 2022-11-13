<template>
  <DesktopFilters />
  <MobileFilters />
</template>

<script>
import DesktopFilters from "./DesktopFilters.vue";
import MobileFilters from "./MobileFilters.vue";

export default {
  components: { DesktopFilters, MobileFilters },
};
</script>
