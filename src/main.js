// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
sync(store, router)

import axios from 'axios'
Vue.prototype.axios = axios
const env = process.env.NODE_ENV
if (env === 'development') {
  // 开启debug模式
  Vue.config.debug = true
  // 开启跨域
  // axios.defaults.withCredentials = true
}
import urls from '@/utils/urls'
Vue.prototype.urls = urls
// 关闭生产模式下给出的提示
Vue.config.productionTip = false
// 配置全局组件
import seedsui from '@/components/seedsui/seedsui'
Vue.use(seedsui)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
