<script >
//inclusione del pacchetto axios nel componente
import axios from 'axios';

//inclusione del componente figlio nel componente
import Header from './components/Header.vue';

//inclusione del componente figlio nel componente
import Main from './components/Main.vue';

//inclusione del file store.js nel componente
import { store } from './store'

export default {

  //nome componenti
  components: {
    Header,
    Main
  },

  //accesso ai dai di store.js
  data() {
    return {
      store
    }
  },


  methods: {
    callMovie() {

      //chiamata ad axios
      axios.get('https://api.themoviedb.org/3/search/movie',
        {
          //parametri da includere nell'indirizzo sopra digitato
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchKey
          }
        })

        //azione che da compiere una volta fatta la chimata ad axios
        .then((response) => {
          console.log(response);
          this.store.movies = response.data.results;

        })
    },
    callSerie() {

      //chiamata ad axios
      axios.get('https://api.themoviedb.org/3/search/tv',
        {
          //parametri da includere nell'indirizzo sopra digitato
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchKey
          }
        })

        //azione che da compiere una volta fatta la chimata ad axios
        .then((response) => {
          console.log(response);
          this.store.series = response.data.results;



        })
    }
  },

  created() {

    //la funzione verrà inizializzata nel life cicle Created
    this.callMovie()
    this.callSerie()
  },


}
</script>

<template>
  <div id="container">
    <!-- il componente App invocherà la funzione callMovie per il figlio Header  -->
    <Header @searchMovie="callMovie" @searchSerie="callSerie" />
    <Main />
  </div>
</template>

<style lang="scss" scoped>
#container {
  max-width: 1040px;
  margin: 0 auto;}
</style>
