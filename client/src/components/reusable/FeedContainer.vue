<template>
  <div class="feed-container">
    <slot>No Slot content</slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";
.feed-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  margin: 20px auto;
  padding: 10px;
  box-shadow: 0 1px 15px 1px $color-primary-dark;

  @media screen and(max-width: 500px) {
    width: 100%;
    box-shadow: none;
  }
}
</style>
