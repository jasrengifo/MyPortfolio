import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/assets/css/theme.css'


import i18n from "@/assets/js/i18n";

import VueCryptojs from 'vue-cryptojs'

import VueGtag from 'vue-gtag'

import VueAnimated from '@codekraft-studio/vue-animated'





/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons fab */
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

/* import specific icons fas, fa */
import { faPlane, faCircleInfo,faEarthAmericas,faLaptopCode, faShoppingCart, faChartBar, faUtensils, faHome, faPaintBrush, faGamepad, faArrowUp, faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

/* import specific icons far */
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'



/* add icons to the library */
library.add(faFacebookF, faCircleInfo, faInstagram, faArrowLeft, faLinkedinIn, faTwitter, faGithub, faPlane, faLaptopCode, faEarthAmericas,faShoppingCart, faChartBar, faUtensils, faHome, faPaintBrush, faGamepad, faArrowUp, faBars, faTimesCircle)





createApp(App).use(VueGtag, {
    config: { id: 'G-8HD7E56HT4' },
    enabled: false
}).use(VueAnimated).use(i18n).use(VueCryptojs).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
