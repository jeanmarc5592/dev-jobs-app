<template>
  <header class="header-container"></header>
</template>

<style lang="scss" scoped>
.header-container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media only screen and (min-width: 768px) {
    background-image: url("../../assets/icons/bg-header-desktop.svg");
    height: 160px;
  }

  @media only screen and (min-width: 375px) and (max-width: 768px) {
    background-image: url("../../assets/icons/bg-header-tablet.svg");
    height: 160px;
  }

  @media only screen and (max-width: 375px) {
    background-image: url("../../assets/icons/bg-header-mobile.svg");
    height: 136px;
  }
}
</style>
