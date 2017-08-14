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
import '@/utils/dateutil.js'
import '@/utils/object.js'

import Alert from '@/components/Alert'
import Actionsheet from '@/components/Actionsheet'
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import Caption from '@/components/Caption'
import Card from '@/components/Card'
import Close from '@/components/Close'
import Dialog from '@/components/Dialog'
import Dot from '@/components/Dot'
import Group from '@/components/Group'
import LoadingFading from '@/components/LoadingFading'
import LoadingSpinning from '@/components/LoadingSpinning'
import Mark from '@/components/Mark'
import Peg from '@/components/Peg'
import Star from '@/components/Star'
import Sticker from '@/components/Sticker'
import Tabbar from '@/components/Tabbar'
import Tagline from '@/components/Tagline'
import Tip from '@/components/Tip'
import Titlebar from '@/components/Titlebar'
import Toast from '@/components/Toast'
import Prompt from '@/components/Prompt'
import Popover from '@/components/Popover'
import Picker from '@/components/Picker'
import InputDate from '@/components/Picker/InputDate.vue'
import InputCity from '@/components/Picker/InputCity.vue'
import Grid from '@/components/Grid'
import ShareBox from '@/components/ShareBox'

Vue.component('Alert', Alert)
Vue.component('Actionsheet', Actionsheet)
Vue.component('Badge', Badge)
Vue.component('Button', Button)
Vue.component('Caption', Caption)
Vue.component('Card', Card)
Vue.component('Close', Close)
Vue.component('Dialog', Dialog)
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
Vue.component('Prompt', Prompt)
Vue.component('Popover', Popover)
Vue.component('Picker', Picker)
Vue.component('InputDate', InputDate)
Vue.component('InputCity', InputCity)
Vue.component('Grid', Grid)
Vue.component('ShareBox', ShareBox)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

