<template>
  <header>
    <nav class="nav">
      <h1>Lolo Website</h1>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
header {
  height: auto;
  padding: 10px;
  background-color: $color-primary-dark;

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      padding: 5px;
      color: $color-primary-green;
    }
  }
}
</style>
