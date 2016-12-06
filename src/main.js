import Vue from 'vue'
import {sync} from 'vuex-router-sync'

import PlaceholderImage from 'components/PlaceholderImage'

Vue.component('PlaceholderImage', PlaceholderImage)

import router from './router'
import store from './store'
import App from './App'

// add 'route' into store.state
sync(store, router)

const wrapComponent = Vue.util.extend({
  router,
  store
}, App)

const app = new Vue(wrapComponent)

// bootstrap app
app.$mount('#app')

