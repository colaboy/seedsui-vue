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
import GroupDemo from '@/views/GroupDemo'
import CardDemo from '@/views/CardDemo'
import StarDemo from '@/views/StarDemo'
import GridDemo from '@/views/GridDemo'
import PopupDemo from '@/views/PopupDemo'
import PickerDemo from '@/views/PickerDemo'
import FormDemo from '@/views/FormDemo'
import CarrouselDemo from '@/views/CarrouselDemo'
import CarrouselPageDemo from '@/views/CarrouselPageDemo'
import ImglazyDemo from '@/views/ImglazyDemo'

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
    },
    {
      path: '/groupDemo',
      name: 'groupDemo',
      component: GroupDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/cardDemo',
      name: 'cardDemo',
      component: CardDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/starDemo',
      name: 'starDemo',
      component: StarDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/gridDemo',
      name: 'gridDemo',
      component: GridDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/popupDemo',
      name: 'popupDemo',
      component: PopupDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/pickerDemo',
      name: 'pickerDemo',
      component: PickerDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/formDemo',
      name: 'formDemo',
      component: FormDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/carrouselDemo',
      name: 'carrouselDemo',
      component: CarrouselDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/carrouselPageDemo',
      name: 'carrouselPageDemo',
      component: CarrouselPageDemo,
      meta: {keepAlive: true}
    },
    {
      path: '/imglazyDemo',
      name: 'imglazyDemo',
      component: ImglazyDemo,
      meta: {keepAlive: true}
    },
    {
      path: '*',
      redirect: to => {
        return '/'
      }
    }
  ]
})
