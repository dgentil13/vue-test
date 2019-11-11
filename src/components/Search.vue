
<template>
  <form @submit.prevent="onSubmit([filter, query])">
    <input type="text" v-model="query" placeholder="Search for your favorite book here!" />
    <button type="submit">Search</button>
    <br />
    <label>Title</label>
    <input type="radio" value="intitle" id="title" v-model="filter" />
    <label>Author</label>
    <input type="radio" value="inauthor" id="author" v-model="filter" />
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Search",
  methods: {
    ...mapActions(["onSubmit"])
  },
  data() {
    return {
      query: "",
      filter: "intitle"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
