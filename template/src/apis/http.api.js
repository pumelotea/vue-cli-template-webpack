import 'url-search-params-polyfill'
import { post, get, del, put } from '@/plugins/http-method.plugin'
import '@/configs/http.config'
export default {
  install (vue) {
    vue.prototype.$api = this
  },
  login (username, password) {
    let params = new URLSearchParams()
    params.append('username', username)
    params.append('password', password)
    return post('/login', params)
  }
}
