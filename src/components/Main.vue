
<script>

//inclusione del componente figlio nel componente
import Card from './Card.vue';

//inclusione del file store.js nel componente
import { store } from '../store'

//esportare il contenuto del componente in modo da poterlo includere in altri componenti
export default {
    //nome componente
    name: 'Main',
    components: {
        Card
    },
    //accesso ai dai di store.js
    data() {
        return {
            store
        }
    },
    methods: {
        
    },
    computed: {
    results() {
      return [...this.store.movies, ...this.store.series]
    }
  }
    
    
    
}

</script>

<template>
    <ul>
            <h3>Results</h3>
            <Card v-for="element in results.slice(0, 20)" 
            :image="element.poster_path"
            :info="element" />
            
        </ul>
    <div class="d-flex">
        <ul>
            <h3>Movie</h3>
            <Card v-for="element in store.movies.slice(0, 10)" 
            :image="element.poster_path"
            :info="element"  />
            
        </ul>
        <ul>
            <h3>TV Series</h3>
            <Card v-for="element in store.series.slice(0, 10)"
            :image="element.poster_path"
            :info="element"  />  
        </ul>
    </div>
    <!-- lista movies trovati -->
    

</template>

<style lang="scss" scoped>

</style>