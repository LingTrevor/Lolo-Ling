<template>
  <button>{{ btnTitle }}</button>
</template>

<script>
export default {
  props: {
    btnTitle: String
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
button {
  border-radius: 30px;
  border: 1px solid $color-primary-dark;
  background: $color-primary-dark;
  color: $color-primary-green;
  font-size: 12px;
  font-weight: bolder;
  padding: 8px 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 100ms ease-in;
  cursor: pointer;
  margin-top: 20px;

  &:active {
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
}
</style>
