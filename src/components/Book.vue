<template>
  <div>
    <h1>
      {{
      book.volumeInfo.title
      }}
    </h1>
    <figure>
      <img :src="book.volumeInfo.imageLinks.thumbnail" />
    </figure>
    <p v-for="(author, idx) in book.volumeInfo.authors" :key="idx">{{author}}</p>
    <div>
      {{
      book.volumeInfo.description
      }}
    </div>
    <p>
      {{
      book.volumeInfo.pageCount
      }}
    </p>
    <p>
      <a :href="book.volumeInfo.infoLink">Google Info</a>
    </p>
    <button @click="goBack">Back</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Book",

  data() {
    return {
      book: []
    };
  },
  created() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${this.$route.params.id}?key=AIzaSyA4TrQpaKQj75j-1fOMgTykqqqQmLmqfMY`
      )
      .then(res => {
        this.book = res.data;
        // eslint-disable-next-line no-console
        console.log(res.data);
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
