import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import UserStatus from '@/status/user'

axios.interceptors.request.use(config => {
  // 服务器地址覆盖优先级 自定义 > 通用

  // 通用覆盖
  if (process.env.NODE_ENV === 'development') {
    config.baseURL = window.api.dev.server
  }

  if (process.env.NODE_ENV === 'production') {
    config.baseURL = window.api.prod.server
  }

  // 配置授权头
  if (config.url.replace(config.baseURL, '') !== '/login') {
    config.headers.accesstoken = UserStatus.getToken()
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(
  response => {
    // token 无效返回，直接跳转回登陆界面
    if (response.data['Code'] === '-1') {
      router.push('/login')
      return
    }
    return response
  },
  error => {
    return Promise.reject(error)
  })

Vue.prototype.$http = axios
