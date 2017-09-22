import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

import RouterLayout from './router-layout.js'
import RouterNavigation from './router-navigation.js'
import RouterDataEntry from './router-dataentry.js'
import RouterDataDisplay from './router-datadisplay.js'
import RouterFeedback from './router-feedback.js'
import RouterGesture from './router-gesture.js'
Vue.use(Router)

export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {
      path: '/index.html',
      name: 'home',
      component: Home,
      meta: {keepAlive: true},
      children: [
        ...RouterLayout,
        ...RouterNavigation,
        ...RouterDataEntry,
        ...RouterDataDisplay,
        ...RouterFeedback,
        ...RouterGesture
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
