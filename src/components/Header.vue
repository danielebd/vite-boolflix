
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
            <input class="my-text form-control" v-model="store.searchKey" @keyup.enter="$emit('searchMovie')" type="text" placeholder="search movie">
            <input class="my-btn btn btn-primary " type="submit" value="Search">
        </form>
    </div>
</template>

<style scoped lang="scss">
    #container {
        display: flex;
        justify-content: space-between;
        padding: 30px 0;
        vertical-align: middle;
        
        h1{
            color: red;
            cursor: pointer;
        }

        .my-btn{
            background-color: white;
            outline-color: white;
            border: white;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            border-left: solid 1px;

        }

        .my-text {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            font-weight: bold;
        }

        input {
            height: 40px;
            background-color: white;
            color: black;
            font-weight: bold;
            border: white;
            
        }
    }

</style>