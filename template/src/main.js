import 'animate.css'
import 'iview/dist/styles/iview.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'echarts/lib/echarts'
import HttpApi from '@/apis/http.api'
import iView from 'iview'
import FullScreenPlugin from '@/plugins/full-screen.plugin'
import '@/configs/router.config'

Vue.prototype.$echarts = ECharts
Vue.use(HttpApi)
Vue.use(iView)
Vue.use(FullScreenPlugin)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
