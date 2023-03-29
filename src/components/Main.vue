
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

    
}

</script>

<template>
    <!-- lista movies trovati -->
    <ul>
        <Card v-for="element in store.movies.slice(0, 10)" :title="element.title" :titleOv="element.original_title"
            :lingua="(element.original_language === 'en' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/2560px-Flag_of_the_United_Kingdom_%283-5%29.svg.png' : '')"
            :voto="(element.vote_average === 0) ? 'undefined' : element.vote_average" />
    </ul>
</template>

<style lang="scss" scoped></style>