<template>
  <div
    @click="routeToDetailPage"
    :style="containerInlineStyles"
    class="card-container"
  >
    <div :style="logoInlineStyles" class="logo-container">
      <n-image :src="logo.url" />
    </div>
    <JobCardMetaData
      :containerStyles="metaDataInlineStyles"
      :contract="contract"
      :createdAt="createdAt"
    />
    <n-h3 class="position">{{ position }}</n-h3>
    <n-p class="company">{{ company }}</n-p>
    <n-p class="location">{{ location }}</n-p>
  </div>
</template>

<script>
import { NP, NH3, NImage } from "naive-ui";
import { mapGetters } from "vuex";
import JobCardMetaData from "./JobCardMetaData.vue";

export default {
  components: {
    NP,
    NH3,
    NImage,
    JobCardMetaData,
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
    ...mapGetters(["currentThemeMode"]),
    containerInlineStyles() {
      if (this.currentThemeMode === "light") {
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
    metaDataInlineStyles() {
      return {
        "margin-top": "24px",
      };
    },
  },
  methods: {
    routeToDetailPage() {
      this.$router.push(`/jobs/${this.id}`);
    },
  },
};
</script>

<style scoped lang="scss">
.card-container {
  position: relative;
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
  position: absolute;
  top: -10%;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
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
