import { getToken } from './token'
import router from '@/router/index'
import { NavigationGuardNext, Route } from 'vue-router'
import { mock } from './mock'

export const isAuth = (): boolean => {
  return !!getToken()
}

export const authMiddleware = (to: Route, from: Route, next: NavigationGuardNext) => {
  mock({ to, from })
  if (isAuth()) router.replace({ name: 'history' })
  next()
}

export const noAuthMiddleware = (to: Route, from: Route, next: NavigationGuardNext) => {
  mock({ to, from })
  if (!isAuth()) router.replace({ name: 'login' })
  next()
}
