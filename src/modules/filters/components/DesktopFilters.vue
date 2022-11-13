<template>
  <FilterContainer>
    <n-grid-item>
      <TextInput inputType="search" />
    </n-grid-item>
    <n-grid-item>
      <TextInput inputType="location" />
    </n-grid-item>
    <n-grid-item class="button-container">
      <FiltersCheckbox />
      <n-button attr-type="submit" type="primary"> Search </n-button>
    </n-grid-item>
  </FilterContainer>
</template>

<script>
import { NButton, NGridItem } from "naive-ui";
import FilterContainer from "./FilterContainer.vue";
import TextInput from "./FiltersTextInput.vue";
import FiltersCheckbox from "./FiltersCheckbox.vue";

export default {
  components: {
    NButton,
    NGridItem,
    TextInput,
    FilterContainer,
    FiltersCheckbox,
  },
};
</script>

<style scoped lang="scss">
.button-container {
  display: flex;
  align-items: center;
  padding: 0 12px;

  button {
    margin-left: auto;
  }
}
</style>
