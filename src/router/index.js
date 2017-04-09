import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Feed from '@/components/Feed'

Vue.use(Router)

export default new Router({
  mode: "hash",
  routes: [
    { path: '/', component: Hello },
    // { path: '/login', component: Login }, 
    { path: '/feed', component: Feed },
    //   {  
    //     path: '/admin',  
    //     component: Admin, 
    //     children: [ 
    //         { 
    //           path: 'vods', 
    //           component: VodList 
    //         }, 
    //         { 
    //           path: 'tags', 
    //           component: TagList 
    //         } 
    //       ] 
    //  } 
  ]
})
