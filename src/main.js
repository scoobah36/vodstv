// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/theme.css'
import './assets/css/bs4.css'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
