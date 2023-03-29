
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
        voto: String
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
        <div>Titolo: {{ title }}</div>
        <div>Titolo Originale: {{ titleOv }}</div>
        <div>Lingua: <img :src="lingua" alt=""></div>
        <div>Voto: {{ voto }}</div>
    </li>
</template>
    
<style lang="scss" scoped>
    img {
        width: 20px;
    }
</style>