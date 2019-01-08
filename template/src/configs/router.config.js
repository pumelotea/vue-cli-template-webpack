import NProgress from 'nprogress'
import router from '../router'

NProgress.configure({
  showSpinner: false,
  template: `<div class="bar" role="bar" style="background: #fd6814;height: 2px;top: 0;position: absolute;width: 100%"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>`
})

// 路由拦截器
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})
