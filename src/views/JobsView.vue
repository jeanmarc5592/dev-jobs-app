<template>
  <main>
    <h2>Hello from JobsView</h2>
    <n-h1>H1</n-h1>
    <n-h2>H2</n-h2>
    <n-h3>H3</n-h3>
    <n-h4>H4</n-h4>
    <n-p>Body</n-p>
    <n-button strong type="primary">Button 1</n-button>
    <n-button strong type="info">Button 2</n-button>
    <n-input type="text" placeholder="Filter by title, companies, expertise...">
      <template #prefix>
        <BaseSearchIcon />
      </template>
    </n-input>
    <n-input type="text" placeholder="Filter by location...">
      <template #prefix>
        <BaseLocationIcon />
      </template>
    </n-input>
    <n-space>
      <BaseSunIcon />
      <n-switch />
      <BaseMoonIcon />
    </n-space>
  </main>
</template>

<script>
import {
  NP,
  NH1,
  NH2,
  NH3,
  NH4,
  NButton,
  NInput,
  NSwitch,
  NSpace,
} from "naive-ui";
import BaseSearchIcon from "../common/components/BaseSearchIcon.vue";
import BaseLocationIcon from "../common/components/BaseLocationIcon.vue";
import BaseSunIcon from "../common/components/BaseSunIcon.vue";
import BaseMoonIcon from "../common/components/BaseMoonIcon.vue";

export default {
  components: {
    NP,
    NH1,
    NH2,
    NH3,
    NH4,
    NButton,
    NInput,
    NSwitch,
    NSpace,
    BaseSearchIcon,
    BaseLocationIcon,
    BaseSunIcon,
    BaseMoonIcon,
  },
};
</script>
