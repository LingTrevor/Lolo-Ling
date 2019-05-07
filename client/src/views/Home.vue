<template>
  <Container>
    <FeedModal :isOpen="isOpen">
      <div slot="close">
        <Button btnTitle="Close" @click.native="isOpen = false"></Button>
      </div>
    </FeedModal>
  </Container>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/Container";
import FeedModal from "@/components/FeedModal";
import Button from "@/components/Button";
export default {
  name: "home",
  data() {
    return {
      isOpen: true
    };
  },
  components: {
    Container,
    FeedModal,
    Button
  }
};
</script>

<style lang="scss" scoped></style>
