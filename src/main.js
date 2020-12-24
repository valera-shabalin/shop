import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Include plugins and libraries */
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

/* Include Bootstrap CSS */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false

/* Init plugins */
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
