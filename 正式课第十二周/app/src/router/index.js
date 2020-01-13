import Vue from 'vue'
import VueRouter from 'vue-router'
import {isLoginAPI} from '../api/api';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path:'/login',
    component: () => import('../views/login.vue')
  },
  {
    path:'/home',
    component: () => import('../views/Home.vue'),
    meta:{
      islogin:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//白名单
const litst = ['/']

//路由拦截
router.beforeEach(async (to,from,next)=>{
  //如果有直接不进行验证的路径，那么可以通过白名单的方式去设置
  if(litst.includes(to.fullPath))return next()

  //每次进路由的时候判断一下用户是否登录
  const flg = await isLoginAPI()
  if(flg){
    if(to.fullPath === '/login'){
      next('/home')
    }else{
      next()
    }    
  }else{
    if(to.matched.some(record => record.meta.islogin)){
      next('/login')
    }else{
      next()
    }
  }
});


export default router
