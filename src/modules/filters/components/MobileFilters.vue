<template>
  <FilterContainer>
    <n-grid-item>
      <FiltersTextInput inputType="search" />
    </n-grid-item>
    <n-grid-item>
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
