import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import IconfontDemo from '@/pages/IconfontDemo'
import LoadingDemo from '@/pages/LoadingDemo'
import TitlebarDemo from '@/pages/TitlebarDemo'
import TabBarDemo from '@/pages/TabBarDemo'
import ButtonDemo from '@/pages/ButtonDemo'
import MarkDemo from '@/pages/MarkDemo'
import BadgeDemo from '@/pages/BadgeDemo'

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
