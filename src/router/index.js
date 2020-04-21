import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/404/*',
    name: 'NotFound',
    component: () => import('../views/errors/404.vue'),
  },
  {
    path: '/401/*',
    name: 'AuthenticationFailed',
    component: () => import('../views/errors/401.vue'),
  },
  {
    path: '/403/*',
    name: 'FailedAuth',
    component: () => import('../views/errors/403.vue'),
  },
  {
    path: '/500/*',
    name: 'InternalServerError',
    component: () => import('../views/errors/500.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
