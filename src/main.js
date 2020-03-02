import Vue from 'vue'
import App from './App.vue'

import moment from 'moment'
import router from './router'
import vuetify from './plugins/vuetify'

import http from './services/http-service'
import alert from './services/alert-service'
import progress from './services/progress-service'

Vue.config.productionTip = false

Vue.use(http)
Vue.use(alert)
Vue.use(progress)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
