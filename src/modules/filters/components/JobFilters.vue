<template>
  <DesktopFilters class="hide-on-mobile" />
  <MobileFilters class="hide-on-desktop" />
</template>

<script>
import DesktopFilters from "./DesktopFilters.vue";
import MobileFilters from "./MobileFilters.vue";

export default {
  components: { DesktopFilters, MobileFilters },
};
</script>
