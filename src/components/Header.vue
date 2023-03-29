
<script>
//inclusione del file store.js nel componente
import { store } from '../store';

//esportare il contenuto del componente in modo da poterlo includere in altri componenti
export default {
    //nome componente
    name: 'Header',
    //accesso ai dai di store.js
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div>
        <!-- form di ricerca film/ emit(azione chimata al padre App) -->
        <form action="" method="get" @submit.prevent="$emit('search')">
            <input v-model="store.searchKey" type="text" placeholder="search movie">
            <input  class="btn btn-primary" type="submit" value="Submit">
        </form>
    </div>
</template>

<style scoped></style>