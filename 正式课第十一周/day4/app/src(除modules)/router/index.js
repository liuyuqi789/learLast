import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component:Home
  },
  {
    path:'/about',
    name:'about',
    component: ()=>import('../views/About.vue'),
    children:[
      {
        path:'vuex1',
        component:()=>import('../views/vuex_1.vue')
      },
      {
        path:'vuex_actions',
        component:()=>import('../views/vuex_2_actions.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
