import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

import Layout from './layout.js'
import Navigation from './navigation.js'
import DataEntry from './dataentry.js'
import DataDisplay from './datadisplay.js'
import Feedback from './feedback.js'
import Gesture from './gesture.js'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {keepAlive: true},
      children: [
        ...Layout,
        ...Navigation,
        ...DataEntry,
        ...DataDisplay,
        ...Feedback,
        ...Gesture
      ]
    }
  ]
})
/* {
  path: '*',
  redirect: to => {
    return '/'
  }
} */
