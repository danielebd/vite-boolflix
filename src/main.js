import { createApp } from 'vue';
import './assets/scss/main.scss';
import '@fontsource/montserrat'
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faStarFull, faStar)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
