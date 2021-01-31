import Cookies from 'js-cookie'

export const setToken = (token: string): void => {
  Cookies.set('access_token', token, { expires: 1 })
}

export const getToken = (): string => {
  return Cookies.get('access_token')
}

export const removeToken = (): void => {
  Cookies.remove('access_token')
}
