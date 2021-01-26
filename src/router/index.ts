import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: { layout: 'authLayout' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue').then(c => c.default),
    meta: { layout: 'authLayout' }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue').then(c => c.default),
    meta: { layout: 'authLayout' }
  },

  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Default.vue').then(c => c.default),
    children: [
      {
        path: 'history',
        name: 'history',
        component: () => import('@/views/History.vue').then(c => c.default),
        meta: { layout: 'defaultLayout' }
      }
    ]
  },
  { path: '*', redirect: { name: 'main' } }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
