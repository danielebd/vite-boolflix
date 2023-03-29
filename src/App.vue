<script >
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { store } from './store'
export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data() {
    return {
      store
    }
  },
  methods: {
    callMovie() {
      axios.get('https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchKey
          }
        })
        .then((response) => {
          console.log(response);
          this.store.movies = response.data.results;
        })
    }
  },
  created() {
    this.callMovie()
  }
}
</script>

<template>
  <Header @search="callMovie" />
  <Main />
</template>

<style lang="scss" scoped></style>
