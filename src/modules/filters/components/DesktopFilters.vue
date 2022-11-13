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
      <FiltersSubmitButton />
    </n-grid-item>
  </FilterContainer>
</template>

<script>
import { NGridItem } from "naive-ui";
import FilterContainer from "./FilterContainer.vue";
import TextInput from "./FiltersTextInput.vue";
import FiltersCheckbox from "./FiltersCheckbox.vue";
import FiltersSubmitButton from "./FiltersSubmitButton.vue";

export default {
  components: {
    NGridItem,
    TextInput,
    FilterContainer,
    FiltersCheckbox,
    FiltersSubmitButton,
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
