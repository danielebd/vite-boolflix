
<script>
import { store } from '../store';
//esportare il contenuto del componente in modo da poterlo includere in altri componenti
export default {
    //nome componente
    name: 'Card',
    //elementi che vogliamo esportare nel componente padre
    props: {
        info: Object,
        //lingua: String,
        image: String,
        //voto: Number
    },
    data() {
        return {
            store
        }
    },
    computed: {
        title(){
            return this.info.title || this.info.name
        },
        titleOv(){
            return this.info.original_title || this.info.original_name
        },
        voto(){
            return (Math.ceil(this.info.vote_average / 2))
        },
        flag(){
            if(this.info.original_language === 'en'){
                return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/2560px-Flag_of_the_United_Kingdom_%283-5%29.svg.png'
            }
            else if(this.info.original_language === 'it') {
                return 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png'
            }
            else if(this.info.original_language === 'fr') {
                return 'https://www.bandiere-mondo.it/data/flags/w580/fr.png'
            }
            else if(this.info.original_language === 'de') {
                return 'https://www.bandiere-mondo.it/data/flags/w580/de.png'
            }
            else if(this.info.original_language === 'ko') {
                return 'https://www.bandiere-mondo.it/data/flags/w580/kr.webp'
            }
            else if(this.info.original_language === 'ja') {
                return 'https://www.bandiere-mondo.it/data/flags/w580/jp.webp'
            }
            else {
                return ''
            }
        }

    }
    
    
    
    
}
</script>

<template>
    <!-- info movie/tv -->
    <li>
        <div class="img">
            <img :src="'https://image.tmdb.org/t/p/w185' + image" alt="#poster-non-presente">
        </div>
        <div>Titolo: {{ title }}</div>
        <div>Titolo Originale: {{ titleOv }}</div>
        <div>Lingua: <img class="flag" :src="flag" alt=""></div>
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