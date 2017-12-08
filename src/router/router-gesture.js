import dragRefreshDemo from '@/containers/dragRefreshDemo'
import pullListDemo from '@/containers/pullListDemo'
import asideDemo from '@/containers/asideDemo'
import shakeDemo from '@/containers/shakeDemo'
import indexbarDemo from '@/containers/indexbarDemo'

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
