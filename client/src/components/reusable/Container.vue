<template>
  <div class="container">
    <slot>No slot content</slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";
.container {
  width: 100%;
  padding: 20px;
  background-color: $color-container-bg;
  min-height: 100%;

  @media screen and(max-width: 500px) {
    padding: 5px;
  }
}
</style>
