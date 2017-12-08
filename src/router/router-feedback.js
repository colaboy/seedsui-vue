import loadingDemo from '@/containers/loadingDemo'
import popupDemo from '@/containers/popupDemo'
import historyDemo from '@/containers/historyDemo'
import calendarDemo from '@/containers/calendarDemo'
import timepartDemo from '@/containers/timepartDemo'
import animateDemo from '@/containers/animateDemo'
import handsignDemo from '@/containers/handsignDemo/handsignDemo.vue'

export default [
  {
    path: 'loadingDemo',
    name: 'loadingDemo',
    component: loadingDemo
  },
  {
    path: 'popupDemo',
    name: 'popupDemo',
    component: popupDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'animateDemo',
    name: 'animateDemo',
    component: animateDemo
  },
  {
    path: 'timepartDemo',
    name: 'timepartDemo',
    component: timepartDemo
  },
  {
    path: 'calendarDemo',
    name: 'calendarDemo',
    component: calendarDemo
  },
  {
    path: 'historyDemo',
    name: 'historyDemo',
    component: historyDemo
  },
  {
    path: 'handsignDemo',
    name: 'handsignDemo',
    component: handsignDemo
  }
]
