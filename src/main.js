import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'buefy/dist/buefy.css'
import Buefy from 'buefy'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/css/anime.css'

import { Plugin } from 'vue-fragment'

Vue.use(Plugin)

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
