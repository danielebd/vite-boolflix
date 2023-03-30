
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
        voto: String,
        image: String
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
        <div>Lingua: <img class="icon" :src="lingua" alt=""></div>
        <div>Voto: {{ voto }}</div>
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

.icon {
    width: 20px;
}
</style>