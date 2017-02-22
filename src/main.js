
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import '../theme/index.css'
import Element from 'element-ui'
Vue.use(Element)

// import components
import App from './App'
import Hello from './components/Hello'
import VodList from './components/VodList'
import TagList from './components/TagList'

import Admin from './controllers/Admin'
import Feed from './controllers/Feed'

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: Hello },
    { path: '/feed', component: Feed },
    { 
      path: '/admin', 
      component: Admin,
      children: [
          {
            path: 'vods',
            component: VodList
          },
          {
            path: 'tags',
            component: TagList
          }
        ]
   }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
