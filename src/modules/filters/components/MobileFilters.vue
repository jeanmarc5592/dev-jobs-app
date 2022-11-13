<template>
  <FilterContainer>
    <n-grid-item span="2">
      <FiltersTextInput :hasIcon="false" inputType="search" />
    </n-grid-item>
    <n-grid-item class="button-container">
      <n-button>
        <template #icon>
          <BaseFilterIcon />
        </template>
      </n-button>
      <FiltersSubmitButton />
    </n-grid-item>
  </FilterContainer>
</template>

<script>
import { NGridItem, NButton } from "naive-ui";
import FilterContainer from "./FilterContainer.vue";
import FiltersTextInput from "./FiltersTextInput.vue";
import FiltersSubmitButton from "./FiltersSubmitButton.vue";
import BaseFilterIcon from "../../../common/components/BaseFilterIcon.vue";

export default {
  components: {
    NGridItem,
    NButton,
    FilterContainer,
    FiltersTextInput,
    FiltersSubmitButton,
    BaseFilterIcon,
  },
};
</script>

<style scoped lang="scss">
.button-container {
  display: flex;
  align-items: center;
}
</style>
