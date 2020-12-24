import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Import Firebase */
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

/* Import Bootstrap Vue */
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

/* Import Bootstrap CSS */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false

/* Init plugins */
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/* Include Firebase */
firebase.initializeApp({
  apiKey: "AIzaSyDO2JOjEuLzds77tppXRCTCcM2rYXMdE3k",
  authDomain: "shop-b4d56.firebaseapp.com",
  projectId: "shop-b4d56",
  storageBucket: "shop-b4d56.appspot.com",
  messagingSenderId: "999485732328",
  appId: "1:999485732328:web:ced93466140e8ee3b6a05d"
})

let app
firebase.auth().onAuthStateChanged(() => {
  if ( !app ) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
