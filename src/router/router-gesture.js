import dragRefreshDemo from '@/views/dragRefreshDemo'
import pullListDemo from '@/views/pullListDemo'
import asideDemo from '@/views/asideDemo'
import shakeDemo from '@/views/shakeDemo'
import indexbarDemo from '@/views/indexbarDemo'

export default [
  {
    path: 'dragRefreshDemo',
    name: 'dragRefreshDemo',
    component: dragRefreshDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'pullListDemo',
    name: 'pullListDemo',
    component: pullListDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'asideDemo',
    name: 'asideDemo',
    component: asideDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'shakeDemo',
    name: 'shakeDemo',
    component: shakeDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'indexbarDemo',
    name: 'indexbarDemo',
    component: indexbarDemo,
    meta: {keepAlive: true}
  }
]
