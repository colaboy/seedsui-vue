import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Iconfont from '@/pages/Iconfont/Iconfont.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {keepAlive: true}
    },
    {
      path: '/iconfont',
      name: 'iconfont',
      component: Iconfont,
      meta: {keepAlive: true}
    }
  ]
})
