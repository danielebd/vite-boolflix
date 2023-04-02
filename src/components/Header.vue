
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
    <div id="container">
        <h1>Boolflix</h1>
        <!-- form di ricerca film/ emit(azione chimata al padre App) -->
        <form class="d-flex align-items-center" action="" method="get" @submit.prevent="$emit('searchMovie'), $emit('searchSerie')">
            <input class="form-control rounded-0" v-model="store.searchKey" @keyup.enter="$emit('searchMovie')" type="text" placeholder="search movie">
            <input class="btn btn-primary rounded-0" type="submit" value="Search">
        </form>
    </div>
</template>

<style scoped lang="scss">
    #container {
        display: flex;
        justify-content: space-between;
        margin: 30px 0;
        vertical-align: middle;
        
        h1{
            color: red;
            cursor: pointer;
        }

        .my-btn{
            background-color: white;
            outline-color: white;
            border: white;
        }

        input {
            height: 40px;
            background-color: white;
            color: black;
            
        }
    }

</style>