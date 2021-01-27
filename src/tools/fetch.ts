import { isAuth } from './security'
import { getToken } from './token'

export const getData = async (url: string, method: string = 'get', body?: any, headers: any = {}) => {
  if (isAuth) headers['Authorization'] = getToken()

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  }
  if (body) options.body = JSON.stringify(body)

  return fetch(url, options).then(res => res.json())
}
