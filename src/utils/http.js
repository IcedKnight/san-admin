import axios from 'axios'
import { Message } from 'element-ui'
// import store from '../store'
// import { getToken } from '@/utils/auth'

const ajax = axios.create({
  baseURL: 'http://106.15.192.46:80/',
  timeout: 5000
})

ajax.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   // config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone拦截器
ajax.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

class Http {
  request(param) {
    return ajax(param)
  }
  get(url, param = {}) {
    return ajax.get(url, {
      params: {
        // 'token': cookies.get('token'),
        ...param
      }
    })
  }

  post(url, param = {}) {
    return ajax.post(url, {
      ...param
    })
  }

  postForm(url, param = {}) {
    const form = new FormData()
    for (const i in param) {
      form.append(i, param[i])
    }
    // form.append('token', cookies.get('token'))
    return ajax.post(url, form)
  }
}
export default new Http()

