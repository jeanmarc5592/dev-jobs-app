<template>
  <p>{{ id }}</p>
  <p>{{ company }}</p>
  <p>{{ logo.url }}</p>
  <p>{{ logoBackground }}</p>
  <p>{{ createdAt }}</p>
  <p>{{ contract }}</p>
  <p>{{ location }}</p>
  <p>{{ position }}</p>
</template>

<script>
export default {
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
};
</script>
