<template>
  <transition name="modal">
    <div v-if="isOpen">
      <div class="overlay" @click.self="isOpen = false">
        <div class="modal">
          <div class="modal-header">
            <slot name="header">Header Content</slot>
          </div>
          <div class="modal-image">
            <slot name="image">Image</slot>
          </div>
          <div class="modal-body">
            <slot name="body">Body</slot>
          </div>
          <slot name="close"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "FeedModal",
  props: {
    isOpen: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: $color-modal-bg;
  z-index: 999;
  transition: opacity 0.2s ease;

  .modal {
    width: 80%;
    max-height: 80%;
    overflow: scroll;
    margin: 0px auto;
    padding: 40px;
    background-color: $color-container-bg;
    border-radius: 2px;
    box-shadow: 0 2px 8px 3px;
    transition: all 0.2s ease-in;

    .modal-header {
      padding: 10px;
      text-align: center;
      margin-bottom: 20px;
    }

    .modal-image {
      padding: 10px;

      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
      }
    }

    .modal-body {
      padding: 10px;
      text-align: justify;
    }
  }
}
</style>
