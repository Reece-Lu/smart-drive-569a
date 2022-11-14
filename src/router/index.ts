import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue')
  }
]

const router = new VueRouter({
  routes
})

// route guard, check whether it needs to log in before every page jump.
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  (isLogin === '1' || to.name === 'Login') ? next() : next({ name: 'Login' })
})

export default router
