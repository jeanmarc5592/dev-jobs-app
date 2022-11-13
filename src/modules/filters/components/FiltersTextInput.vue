<template>
  <!-- SEARCH -->
  <n-input
    v-if="inputType === 'search'"
    :value="search"
    @input="updateSearch"
    :class="inputClasses"
    type="text"
    placeholder="Filter by title, companies, expertise..."
    clearable
  >
    <template #prefix>
      <BaseSearchIcon v-if="hasIcon" class="icon" />
    </template>
  </n-input>
  <!-- LOCATION -->
  <n-input
    v-if="inputType === 'location'"
    :value="location"
    @input="updateLocation"
    :class="inputClasses"
    type="text"
    placeholder="Filter by location..."
    clearable
  >
    <template #prefix>
      <BaseLocationIcon v-if="hasIcon" class="icon" />
    </template>
  </n-input>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { NInput } from "naive-ui";
import BaseSearchIcon from "../../../common/components/BaseSearchIcon.vue";
import BaseLocationIcon from "../../../common/components/BaseLocationIcon.vue";

export default {
  components: {
    NInput,
    BaseSearchIcon,
    BaseLocationIcon,
  },
  props: {
    inputType: {
      type: String,
      required: true,
    },
    hasIcon: {
      type: Boolean,
      default: true,
    },
    hasBorderBottom: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      search: (state) => state.jobs.filters.search,
      location: (state) => state.jobs.filters.location,
    }),
    ...mapGetters(["currentThemeMode"]),
    inputClasses() {
      const lightMode = this.currentThemeMode === "light";
      const darkMode = this.currentThemeMode === "dark";
      const hasBorderBottom = this.hasBorderBottom;
      return {
        "border-right-dark": lightMode && !hasBorderBottom,
        "border-right-light": darkMode && !hasBorderBottom,
        "border-bottom-dark": lightMode && hasBorderBottom,
        "border-bottom-light": darkMode && hasBorderBottom,
      };
    },
  },
  methods: {
    ...mapMutations(["updateFilters"]),
    updateSearch(value) {
      this.updateFilters({ search: value });
    },
    updateLocation(value) {
      this.updateFilters({ location: value });
    },
  },
};
</script>

<style scoped lang="scss">
.border-right-dark {
  border-right: 1px solid rgba(#19202d, 0.15);
  transition: all 0.3s;
}

.border-right-light {
  border-right: 1px solid rgba(#fff, 0.15);
  transition: all 0.3s;
}

.border-bottom-dark {
  border-bottom: 1px solid rgba(#19202d, 0.15);
  transition: all 0.3s;
}

.border-bottom-light {
  border-bottom: 1px solid rgba(#fff, 0.15);
  transition: all 0.3s;
}

.icon {
  margin-right: 8px;
}
</style>
