import { isEmpty } from '@/utils/string-util'

/**
 * user status manage
 */
export default {
  isLogin () {
    return !isEmpty(this.getToken())
  },
  getToken () {
    return sessionStorage.getItem('token')
  },
  setToken (val) {
    sessionStorage.setItem('token', val)
  }
}
