<template>
  <FilterContainer class="hide-on-desktop">
    <n-grid-item span="2">
      <FiltersTextInput :hasIcon="false" inputType="search" />
    </n-grid-item>
    <n-grid-item class="button-container">
      <n-button @click="toggleModal">
        <template #icon>
          <BaseFilterIcon />
        </template>
      </n-button>
      <FiltersSubmitButton />
    </n-grid-item>
  </FilterContainer>
  <n-modal v-model:show="modalIsOpen">
    <n-card
      :bordered="false"
      class="modal-card"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <FiltersTextInput hasBorderBottom inputType="location" />
      <n-space class="modal-bottom-container" vertical>
        <FiltersCheckbox class="modal-checkbox" />
        <n-button
          class="modal-submit"
          type="primary"
          attrType="submit"
          @click="modalSubmit"
        >
          Search
        </n-button>
      </n-space>
    </n-card>
  </n-modal>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { NGridItem, NButton, NModal, NCard, NSpace } from "naive-ui";
import FilterContainer from "./FilterContainer.vue";
import FiltersTextInput from "./FiltersTextInput.vue";
import FiltersSubmitButton from "./FiltersSubmitButton.vue";
import FiltersCheckbox from "./FiltersCheckbox.vue";
import BaseFilterIcon from "../../../common/components/BaseFilterIcon.vue";

export default {
  components: {
    NGridItem,
    NButton,
    NModal,
    NCard,
    NSpace,
    FilterContainer,
    FiltersTextInput,
    FiltersSubmitButton,
    FiltersCheckbox,
    BaseFilterIcon,
  },
  data() {
    return {
      modalIsOpen: false,
    };
  },
  methods: {
    ...mapMutations(["resetCurrentPage"]),
    ...mapActions(["loadJobsFromAPI", "addGenericLoadingError"]),
    toggleModal() {
      this.modalIsOpen = !this.modalIsOpen;
    },
    async modalSubmit() {
      try {
        this.resetCurrentPage();
        await this.loadJobsFromAPI({ shouldOverwrite: true });
        this.toggleModal();
      } catch (error) {
        this.addGenericLoadingError();
        console.error(error);
        this.toggleModal();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.button-container {
  display: flex;
  align-items: center;
}

.modal-card {
  width: 90vw;
  display: flex;
  flex-direction: column;

  .modal-bottom-container {
    padding: 12px 24px;

    .modal-checkbox {
      margin-bottom: 16px;
    }

    .modal-submit {
      width: 100%;
    }
  }
}
</style>
