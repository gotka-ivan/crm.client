export const getData = async (url: string, method: string = 'get', body?: any, headers: any = {}) => {
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
