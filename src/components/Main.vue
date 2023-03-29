
<script>
import Card from './Card.vue';
import { store } from '../store'
export default {
    name: 'Main',
    components: {
        Card
    },
    data() {
        return {
            store
        }
    },
}

</script>

<template>
    <ul>
        <Card v-for="element in store.movies.slice(0,10)" :title="element.title" :titleOv="element.original_title" :lingua="element.original_language" :voto="element.vote_average"/>
    </ul>
</template>

<style lang="scss" scoped></style>