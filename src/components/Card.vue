
<script>
import { store } from '../store';
//esportare il contenuto del componente in modo da poterlo includere in altri componenti
export default {
    //nome componente
    name: 'Card',
    //elementi che vogliamo esportare nel componente padre
    props: {
        info: Object,
    },
    data() {
        return {
            store
        }
    },
    computed: {
        title() {
            return this.info.title || this.info.name
        },
        titleOv() {
            return this.info.original_title || this.info.original_name
        },
        voto() {
            return (Math.ceil(this.info.vote_average / 2))
        },
        flag() {
            if (this.info.original_language === 'en') {
                return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/2560px-Flag_of_the_United_Kingdom_%283-5%29.svg.png'
            }
            else if (this.info.original_language === 'it') {
                return 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png'
            }
            else if (this.info.original_language === 'fr') {
                return 'https://www.bandiere-mondo.it/data/flags/w580/fr.png'
            }
            else if (this.info.original_language === 'de') {
                return 'https://www.bandiere-mondo.it/data/flags/w580/de.png'
            }
            else if (this.info.original_language === 'ko') {
                return 'https://www.bandiere-mondo.it/data/flags/w580/kr.webp'
            }
            else if (this.info.original_language === 'ja') {
                return 'https://www.bandiere-mondo.it/data/flags/w580/jp.webp'
            }
            else {
                return ''
            }
        },
        img() {
            return this.info.poster_path !== null ? 'https://image.tmdb.org/t/p/w342' + this.info.poster_path : 'https://placehold.co/342x513/grey/white?text=poster non presente&font=lora'
        },
        overview() {
            return this.info.overview !== '' ? 'Overview: ' + this.info.overview : ''
        }

    }




}
</script>

<template>
    <!-- info movie/tv -->
    <li>
        <article class="d-flex align-items-center">
            <div class="img">
                <img :src="img" alt="#poster-non-presente">
            </div>
            <div class="info ps-4">
                <div>Titolo: {{ title }}</div>
                <div>OT: {{ titleOv }}</div>
                <div>Lingua: <img class="flag" :src="flag" alt=""></div>
                <div>Voto: 
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in voto" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - voto" />
                </div>
                <div class="overview">{{ overview }}</div>
            </div>
        </article>
    </li>
</template>
    
<style lang="scss" scoped>
li {
    list-style-type: none;
    max-width: calc(100% / 3 - 20px);
    margin: 10px;
    cursor: pointer;


    article {
        

        .img{
            max-width: 342px;
            img {
                width: 100%;
            }

        }
        &:hover .img {
            opacity: 0.2;
            transition: 0.5s;
        }

        &:hover .info {
            visibility: visible;
        }

        .info {
            position: absolute;
            color: white;
            visibility: hidden;
            max-width: 300px;

            &>div {

                -webkit-box-orient: vertical;
                -webkit-line-clamp: 5;
                overflow: hidden;
                display: -webkit-box;
                max-width: 100%;
                padding: 3px 0;
            }

        }
    }

    .flag {
        width: 20px;
    }

    .fa-star {
        color: rgb(216, 184, 0);
    }

}
</style>