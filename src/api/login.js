import Http from '@/utils/http'

export function login(username, password) {
  return Http.request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return Http.request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return Http.request({
    url: '/user/logout',
    method: 'post'
  })
}
