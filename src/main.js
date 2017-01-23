
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

// import components
import App from './App'
import Hello from './components/Hello'
import Admin from './controllers/Admin'

Vue.use(VueRouter)

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: Hello },
    { path: '/admin', component: Admin }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
