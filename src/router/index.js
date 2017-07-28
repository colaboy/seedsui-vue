import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import IconfontDemo from '@/views/IconfontDemo'
import LoadingDemo from '@/views/LoadingDemo'
import TitlebarDemo from '@/views/TitlebarDemo'
import TabBarDemo from '@/views/TabBarDemo'
import ButtonDemo from '@/views/ButtonDemo'
import MarkDemo from '@/views/MarkDemo'
import BadgeDemo from '@/views/BadgeDemo'

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
      path: '/iconfontDemo',
      name: 'iconfontDemo',
      component: IconfontDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/loadingDemo',
      name: 'loadingDemo',
      component: LoadingDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/titlebarDemo',
      name: 'titlebarDemo',
      component: TitlebarDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/tabBarDemo',
      name: 'tabBarDemo',
      component: TabBarDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/buttonDemo',
      name: 'buttonDemo',
      component: ButtonDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/markDemo',
      name: 'markDemo',
      component: MarkDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/badgeDemo',
      name: 'badgeDemo',
      component: BadgeDemo,
      meta: {keepAlive: true}
    }
  ]
})
