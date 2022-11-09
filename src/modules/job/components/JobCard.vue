<template>
  <div :style="containerInlineStyles" class="card-container">
    <div :style="logoInlineStyles" class="logo-container">
      <n-image :src="logo.url" />
    </div>
    <div class="meta-data-container">
      <n-p>{{ transformCreatedAt(createdAt) }}</n-p>
      <n-p>&#8226;</n-p>
      <n-p>{{ transformContract(contract) }}</n-p>
    </div>
    <n-h3 class="position">{{ position }}</n-h3>
    <n-p class="company">{{ company }}</n-p>
    <n-p class="location">{{ location }}</n-p>
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
    containerInlineStyles() {
      const { currentThemeMode } = this.$store.getters;
      if (currentThemeMode === "light") {
        return {
          backgroundColor: "#fff",
          transition: "all 0.3s",
        };
      }
      return {
        backgroundColor: "#19202D",
        transition: "all 0.3s",
      };
    },
    logoInlineStyles() {
      return {
        "background-color": `${this.logoBackground}`,
      };
    },
    transformCreatedAt() {
      // TODO: Optimize Date Display (e.g. "4d ago")
      return (rawDate) => new Date(rawDate).toLocaleDateString();
    },
    transformContract() {
      return (rawContract) => {
        switch (rawContract) {
          case "part_time":
            return "Part Time";
          case "full_time":
            return "Full Time";
          case "freelance":
            return "Freelance";
          default:
            return rawContract;
        }
      };
    },
  },
};
</script>

<style scoped lang="scss">
.card-container {
  cursor: pointer;
  border-radius: 6px;
  padding: 32px;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
    transform: translateY(-3px);
    box-shadow: 6px 6px 12px rgba(#000, 0.1);
  }
}

.logo-container {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.meta-data-container {
  display: flex;
  align-items: center;

  p {
    color: #6e8098;

    &:first-of-type {
      margin-right: 8px;
    }
    &:last-of-type {
      margin-left: 8px;
    }
  }
}

.position {
  font-weight: 600;
  margin: 16px 0;
}

.company {
  color: #6e8098;
  margin-bottom: 32px;
}

.location {
  font-weight: 600;
  color: #5964e0;
}
</style>
