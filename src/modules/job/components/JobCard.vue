<template>
  <div>
    <div :style="logoInlineStyles" class="logo-container">
      <n-image :src="logo.url" />
    </div>
    <div>
      <n-p>20h ago</n-p>
      <n-p>{{ contract }}</n-p>
    </div>
    <n-h3>{{ position }}</n-h3>
    <n-p>{{ company }}</n-p>
    <n-p>{{ location }}</n-p>
  </div>
</template>

<script>
import { NP, NH3, NImage } from "naive-ui";

export default {
  components: {
    NP,
    NH3,
    NImage,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    logo: {
      type: Object,
      required: true,
    },
    logoBackground: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    contract: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  computed: {
    logoInlineStyles() {
      return {
        "background-color": `${this.logoBackground}`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.logo-container {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
