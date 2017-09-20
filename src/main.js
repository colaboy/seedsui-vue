// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import store from './store'
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
