<template>
  <Container>
    <FeedContainer v-if="feedItems">
      <div class="card" v-for="(item, index) in feedItems" :key="index">
        <img
          @click="parseFeedItem(index)"
          v-if="item['media:content'][0]['$'].url"
          :src="item['media:content'][0]['$'].url"
          :alt="item['media:content'][0]['$'].url"
          class="image-size"
        />
        <h3 class="item-title" @click="parseFeedItem(index)">
          {{ item.title[0] }}
        </h3>
        <p class="item-description" @click="parseFeedItem(index)">
          {{ item.description[0] }}
        </p>
        <p class="item-date">{{ formatDate(item.pubDate[0]) }}</p>
      </div>
    </FeedContainer>
    <Pulse v-else></Pulse>

    <FeedModal :isOpen="isOpen">
      <h1 slot="header">{{ parsedItem.title }}</h1>
      <img
        class="modal-image"
        slot="image"
        v-if="parsedItem.lead_image_url"
        :src="parsedItem.lead_image_url"
        :alt="parsedItem.lead_image_url"
      />
      <p slot="body" v-html="parsedItem.content"></p>
      <div slot="close">
        <Button btnTitle="Close" @click.native="isOpen = false"></Button>
      </div>
    </FeedModal>
  </Container>
</template>

<script>
import axios from "axios";
import Container from "@/components/Container";
import FeedModal from "@/components/FeedModal";
import FeedContainer from "@/components/FeedContainer";
import Button from "@/components/Button";
import Pulse from "@/components/Pulse";
export default {
  name: "Feed",
  data() {
    return {
      isOpen: false,
      feedItems: "",
      parsedItem: ""
    };
  },
  components: {
    Container,
    FeedModal,
    FeedContainer,
    Button,
    Pulse
  },
  methods: {
    async getFeedItems() {
      await axios.get(`http://localhost:5005/feed/all`).then(response => {
        this.feedItems = response.data;
      });
    },
    formatDate(date) {
      let dateObj = new Date(date).toLocaleDateString();
      return dateObj;
    },
    async parseFeedItem(index) {
      await axios
        .post(`http://localhost:5005/feed/?index=${index}`)
        .then(response => {
          this.isOpen = true;
          this.parsedItem = response.data;
          //   console.log(this.parsedItem);
        });
    }
  },
  created() {
    this.getFeedItems();
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
.card {
  width: 45%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
  text-align: justify;
  border-bottom: 1px solid $color-primary-dark;
  word-wrap: break-word;

  @media screen and(min-width: 1400px) {
    width: 30%;
    // padding: 5px;
  }
  @media screen and(max-width: 1000px) {
    width: 100%;
    padding: 5px;
  }

  img {
    max-height: 200px;
    object-fit: cover;
    cursor: pointer;
  }

  .item-title {
    margin: 10px 0;
    cursor: pointer;
  }

  .item-description {
    margin: 10px 15px;
    cursor: pointer;
  }

  .item-date {
    // padding: 10px;
    margin: 10px 0;
  }
}

//Modal Image
.modal-image {
  padding: 10px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>