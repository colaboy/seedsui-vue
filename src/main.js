// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
sync(store, router)
// 关闭生产模式下给出的提示
Vue.config.productionTip = false
// 配置全局组件
import Alert from '@/components/Alert.vue'
import Button from '@/components/Button.vue'
import Confirm from '@/components/Confirm.vue'
import LoadingFading from '@/components/LoadingFading.vue'
import LoadingSpinning from '@/components/LoadingSpinning.vue'
import Star from '@/components/Star.vue'
import Tabbar from '@/components/Tabbar.vue'
import Titlebar from '@/components/Titlebar.vue'
import Toast from '@/components/Toast.vue'
Vue.component('Alert', Alert)
Vue.component('Button', Button)
Vue.component('Confirm', Confirm)
Vue.component('LoadingFading', LoadingFading)
Vue.component('LoadingSpinning', LoadingSpinning)
Vue.component('Star', Star)
Vue.component('Tabbar', Tabbar)
Vue.component('Titlebar', Titlebar)
Vue.component('Toast', Toast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

