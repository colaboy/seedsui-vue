import loadingDemo from '@/views/loadingDemo'
import popupDemo from '@/views/popupDemo'
import historyDemo from '@/views/historyDemo'
import calendarDemo from '@/views/calendarDemo'
import timepartDemo from '@/views/timepartDemo'
import animateDemo from '@/views/animateDemo'

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
  }
]
