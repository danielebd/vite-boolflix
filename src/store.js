import { reactive } from "vue";
/* reactive consente di rendere reattivo le variabili al di fuori di data semplicemente 
importandoli nel componente in cui serve manipolarli e sfruttarli */

//esportare un 'pacchetto' di variabili e contenitori da manipolare nei componenti
export const store = reactive({
    searchKey: '',
    movies: [],
    apiKey: '840eca309dd4414344136d1eeb75d1d2'
})