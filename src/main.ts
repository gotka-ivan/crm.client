import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

import '@/assets/main.less'
import 'material-design-icons/iconfont/material-icons.css'
import 'materialize-css/dist/js/materialize.js'

import Vuelidate from 'vuelidate'
import { setOpenApiToken } from './tools/token'
import { isAuth } from './tools/security'
Vue.use(Vuelidate)

Vue.config.productionTip = false

if (isAuth) setOpenApiToken()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
