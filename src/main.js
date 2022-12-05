import { createApp } from 'vue'
import App from './App.vue'
import clickOutside from './plugins/clickOutside'

import 'animate.css'
import './assets/style.scss'

createApp(App)
  .use(clickOutside)
  .mount('#app')
