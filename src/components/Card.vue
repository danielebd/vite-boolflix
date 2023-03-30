
<script>
import { store } from '../store';
//esportare il contenuto del componente in modo da poterlo includere in altri componenti
export default {
    //nome componente
    name: 'Card',
    //elementi che vogliamo esportare nel componente padre
    props: {
        title: String,
        titleOv: String,
        lingua: String,
        image: String,
        voto: Number
    },
    data() {
        return {
            store
        }
    },
    
    
    
}
</script>

<template>
    <!-- info movie -->
    <li>
        <div class="img">
            <img :src="'https://image.tmdb.org/t/p/w185' + image" alt="#poster-non-presente">
        </div>
        <div>Titolo: {{ title }}</div>
        <div>Titolo Originale: {{ titleOv }}</div>
        <div>Lingua: <img class="flag" :src="lingua" alt=""></div>
        <div>Voto: {{ voto }}</div>
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in voto"/>
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - voto"/>

    </li>
</template>
    
<style lang="scss" scoped>
/* .img {
    background-image: url('https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png');
    width: 185px;
    background-repeat: no-repeat;
    background-size: contain;
    img {
        width: 100%;
    }
} */

.flag {
    width: 20px;
}
.fa-star {
    color: rgb(216, 184, 0);
}
</style>