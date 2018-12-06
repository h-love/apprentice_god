// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const config = {
  apiKey: 'AIzaSyD3TZEYDDOhCY6avBjclpcif8tNj0cUxjM',
  authDomain: 'apprentice-god.firebaseapp.com',
  databaseURL: 'https://apprentice-god.firebaseio.com/',
  projectId: 'apprentice-god',
  storageBucket: 'apprentice-god.appspot.com',
  messagingSenderId: '950434933833'
}

firebase.initializeApp(config)

library.add(faChevronLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
