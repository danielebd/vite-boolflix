
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
        flag(flag){
            if(flag === 'en'){
                return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/2560px-Flag_of_the_United_Kingdom_%283-5%29.svg.png'
                
            }
            else if(flag === 'it') {
                return 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png'
            }
            else if(flag === 'fr') {
                return 'https://www.bandiere-mondo.it/data/flags/w580/fr.png'
            }
            else if(flag === 'de') {
                return 'https://www.bandiere-mondo.it/data/flags/w580/de.png'
            }
            else if(flag === 'ko') {
                return 'https://www.bandiere-mondo.it/data/flags/w580/kr.webp'
            }
            else {
                return ''
            }
        }
    }
    
}

</script>

<template>
    <div class="d-flex">
        <ul>
            <h3>Movie</h3>
        <Card v-for="element in store.movies.slice(0, 10)" :title="element.title" :titleOv="element.original_title"
            :lingua="flag(element.original_language)"
            :voto="(element.vote_average === 0) ? 'undefined' : element.vote_average" />
            
    </ul>
    <ul>
        <h3>TV Series</h3>
        <Card v-for="element in store.series.slice(0, 10)" :title="element.name" :titleOv="element.original_name"
            :lingua="flag(element.original_language)"
            :voto="(element.vote_average === 0) ? 'undefined' : element.vote_average" />
            
    </ul>
    </div>
    <!-- lista movies trovati -->
    

</template>

<style lang="scss" scoped></style>