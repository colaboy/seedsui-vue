// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 配置路由的开发环境和生产环境
var router
const env = process.env.NODE_ENV
if (env === 'development') {
  router = require('./router/router.dev.js').default
} else {
  router = require('./router/router.build.js').default
}
// vue在启动时生成生产提示
Vue.config.productionTip = false
// 配置store
import store from './store'
// 配置数据请求
import axios from 'axios'
import http from '@/fetch/api'
Vue.prototype.axios = axios
Vue.prototype.$http = http
// 配置全局组件
import seedsui from '@/components/seedsui/seedsui'
Vue.use(seedsui)
// 配置快速点击
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
