import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/assets/css/theme.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons fab */
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faRedditAlien } from '@fortawesome/free-brands-svg-icons';

/* import specific icons fas */
import { faPlane, faLaptopCode, faShoppingCart, faChartBar, faUtensils, faHome, faPaintBrush, faGamepad, faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons'

import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faFacebookF, faInstagram, faLinkedinIn, faTwitter, faRedditAlien, faPlane, faLaptopCode, faShoppingCart, faChartBar, faUtensils, faHome, faPaintBrush, faGamepad, faArrowUp, faBars, faTimesCircle)





createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
