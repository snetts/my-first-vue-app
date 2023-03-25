/* Set up using Vue 3 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faUser)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')