import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path : '/login',
    name : 'Login',
    meta : {
      title : '登录'
    },
    component : () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }, {
    path : '/index',
    name : 'Index',
    meta : {
      title : '首页'
    },
    component : () => import(/* webpackChunkName: "index" */ '../views/Index.vue')
  }, {
    path : '/home',
    name : 'Home',
    meta : {
      title : '我的中心'
    },
    component : () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
