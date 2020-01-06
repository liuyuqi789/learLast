import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(vueRouter)

import Jia from './components/jia.vue'
import Guanyu from './components/guanyu.vue'
import Chuang from './components/chuang.vue'
import VueRouter from 'vue-router';

const routes = [
  {
    path:'/',
    component:Jia
  },
  {
    path:'/guanyu',
    component:Guanyu
  },
  {
    path:'/chuang',
    component:Chuang
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
