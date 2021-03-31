import axios from 'axios'
import router from 'vue-router'

axios.defaults.timeout = 5000 // 5000 ms = 5 s
axios.defaults.withCredentials = true

// Content-type
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// Base Url
axios.defaults.baseURL = 'http://localhost:8888'

// 响应的拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status){
        case 401:
          router.replace({
            path: '/',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          break
        case 404:
          break
      }
      return Promise.reject(error.response)
    }
  }
)

/**
 * Boxing GET method
 */
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Boxing POST method
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
