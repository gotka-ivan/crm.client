import Vue from 'vue'
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue'
import { authMiddleware, noAuthMiddleware } from '@/tools/security'

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
    beforeEnter(to: Route, from: Route, next: NavigationGuardNext) {
      authMiddleware(to, from, next)
    },
    meta: { layout: 'authLayout' }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue').then(c => c.default),
    beforeEnter(to: Route, from: Route, next: NavigationGuardNext) {
      authMiddleware(to, from, next)
    },
    meta: { layout: 'authLayout' }
  },

  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Default.vue').then(c => c.default),
    beforeEnter(to: Route, from: Route, next: NavigationGuardNext) {
      noAuthMiddleware(to, from, next)
    },
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
