import { OpenAPI } from '@/api'
import Cookies from 'js-cookie'

export const getToken = (): string => {
  return Cookies.get('access_token')
}

export const setOpenApiToken = (token?: string): void => {
  OpenAPI.TOKEN = token || getToken()
}

export const setToken = (token: string): void => {
  Cookies.set('access_token', token, { expires: 1 / 24 })
  setOpenApiToken(token)
}

export const removeToken = (): void => {
  Cookies.remove('access_token')
  OpenAPI.TOKEN = ''
}
