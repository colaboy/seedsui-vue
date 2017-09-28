import loadingDemo from '@/views/loadingDemo'
import popupDemo from '@/views/popupDemo'
import historyDemo from '@/views/historyDemo'
import calendarDemo from '@/views/calendarDemo'
import timepartDemo from '@/views/timepartDemo'

export default [
  {
    path: 'loadingDemo',
    name: 'loadingDemo',
    component: loadingDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'popupDemo',
    name: 'popupDemo',
    component: popupDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'timepartDemo',
    name: 'timepartDemo',
    component: timepartDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'calendarDemo',
    name: 'calendarDemo',
    component: calendarDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'historyDemo',
    name: 'historyDemo',
    component: historyDemo,
    meta: {keepAlive: true}
  }
]
