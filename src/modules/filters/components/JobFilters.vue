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

<style scoped lang="scss">
.hide-on-desktop {
  display: inherit;
  @media only screen and (min-width: 768px) {
    display: none;
  }
}

.hide-on-mobile {
  display: none;
  @media only screen and (min-width: 768px) {
    display: inherit;
  }
}
</style>
