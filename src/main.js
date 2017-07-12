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
import Badge from '@/components/Badge.vue'
import Button from '@/components/Button.vue'
import Close from '@/components/Close.vue'
import Confirm from '@/components/Confirm.vue'
import Dot from '@/components/Dot.vue'
import Group from '@/components/Group.vue'
import LoadingFading from '@/components/LoadingFading.vue'
import LoadingSpinning from '@/components/LoadingSpinning.vue'
import Mark from '@/components/Mark.vue'
import Peg from '@/components/Peg.vue'
import Star from '@/components/Star.vue'
import Sticker from '@/components/Sticker.vue'
import Tabbar from '@/components/Tabbar.vue'
import Tagline from '@/components/Tagline.vue'
import Tip from '@/components/Tip.vue'
import Titlebar from '@/components/Titlebar.vue'
import Toast from '@/components/Toast.vue'
import Sliver from '@/components/Sliver.vue'

Vue.component('Alert', Alert)
Vue.component('Badge', Badge)
Vue.component('Button', Button)
Vue.component('Close', Close)
Vue.component('Confirm', Confirm)
Vue.component('Dot', Dot)
Vue.component('Group', Group)
Vue.component('LoadingFading', LoadingFading)
Vue.component('LoadingSpinning', LoadingSpinning)
Vue.component('Mark', Mark)
Vue.component('Peg', Peg)
Vue.component('Star', Star)
Vue.component('Sticker', Sticker)
Vue.component('Tabbar', Tabbar)
Vue.component('Tagline', Tagline)
Vue.component('Tip', Tip)
Vue.component('Titlebar', Titlebar)
Vue.component('Toast', Toast)
Vue.component('Sliver', Sliver)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

