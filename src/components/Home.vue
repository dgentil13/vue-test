<template>
  <div>
    <h1>Search Books</h1>
    <Search />
    <div v-for="(book, idx) in books" :key="idx">
      <router-link :to="'/book/' + book.id">Detail</router-link>
      {{book.volumeInfo.title}}
      <div v-if="book.volumeInfo.imageLinks">
        <img :src="book.volumeInfo.imageLinks.thumbnail" />
      </div>
      <div v-else>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-o7R2aABqdQe3OUMyKFIux3NKH0rmVEgZbEwbXGc4D7rebt1V"
          height="200px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./Search";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Search
  },
  computed: mapGetters(["books"]),

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
