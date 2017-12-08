import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/containers/Home'

import RouterLayout from './router-layout.js'
import RouterNavigation from './router-navigation.js'
import RouterDataEntry from './router-dataentry.js'
import RouterDataDisplay from './router-datadisplay.js'
import RouterFeedback from './router-feedback.js'
import RouterGesture from './router-gesture.js'
import RouterNative from './router-native.js'
Vue.use(Router)

export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {keepAlive: true},
      children: [
        ...RouterLayout,
        ...RouterNavigation,
        ...RouterDataEntry,
        ...RouterDataDisplay,
        ...RouterFeedback,
        ...RouterGesture,
        ...RouterNative
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
