import Cookies from 'js-cookie'

export const setToken = (token: string): void => {
  Cookies.set('token', token, { expires: 1 })
}

export const getToken = (): string => {
  return Cookies.get('token')
}

export const removeToken = (): void => {
  Cookies.remove('token')
}

export const isAuth = (): boolean => {
  return !!Cookies.get('token')
}
