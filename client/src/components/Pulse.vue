<template>
  <div class="pulse-loading"></div>
</template>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
.pulse-loading {
  margin: 100px auto;
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: $color-primary-dark;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(49, 78, 94, 0.4);
  animation: pulse 1.5s infinite;

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(49, 78, 94, 0.4);
    }
    70% {
      -webkit-box-shadow: 0 0 0 10px rgba(49, 78, 94, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(49, 78, 94, 0);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(49, 78, 94, 0.4);
      box-shadow: 0 0 0 0 rgba(49, 78, 94, 0.4);
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(49, 78, 94, 0);
      box-shadow: 0 0 0 10px rgba(49, 78, 94, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(49, 78, 94, 0);
      box-shadow: 0 0 0 0 rgba(49, 78, 94, 0);
    }
  }
}
</style>
