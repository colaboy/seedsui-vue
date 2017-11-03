// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 配置桥接
import bridge from '@/bridge'
Vue.prototype.bridge = bridge

// 配置路由的开发环境和生产环境
import router from '@/router'
/* var router
const env = process.env.NODE_ENV
if (env === 'development') {
  router = require('@/router/router.dev.js').default
} else {
  router = require('@/router/router.build.js').default
} */

// vue在启动时生成生产提示
Vue.config.productionTip = false

// 配置store
import store from '@/store'

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

// 获得设备平台|系统|系统版本
import Device from '@/utils/device.js'
store.dispatch('setPlatform', Device.platform)
store.dispatch('setOs', Device.os)
store.dispatch('setOsVersion', Device.osVersion)
Device.onLine((bool) => {
  store.dispatch('setOnLine', bool)
  if (bool) {
    console.log('有网')
  } else {
    console.log('无网')
  }
})
console.log('平台:' + store.state.system.platform)
console.log('操作系统:' + store.state.system.os)
console.log('系列版本:' + store.state.system.osVersion)

// 配置router跳转Loading显隐
router.beforeEach((to, from, next) => {
  store.dispatch('setIsLoading', true)
  next()
})
router.afterEach((to, from) => {
  store.dispatch('setIsLoading', false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
