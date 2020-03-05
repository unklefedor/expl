import Vue from 'vue'
import App from './App.vue'

import router from './router'
import vuetify from './plugins/vuetify'

import http from './services/http-service'
import alert from './services/alert-service'
import progress from './services/progress-service'

import "@/assets/global.css"

Vue.config.productionTip = false

Vue.use(http)
Vue.use(alert)
Vue.use(progress)

Vue.use(require('vue-moment'));

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
