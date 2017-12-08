import flexDemo from '@/containers/flexDemo'
import spaceDemo from '@/containers/spaceDemo'
import rowDemo from '@/containers/rowDemo'
import listDemo from '@/containers/listDemo'

export default [
  {
    path: 'flexDemo',
    name: 'flexDemo',
    component: flexDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'spaceDemo',
    name: 'spaceDemo',
    component: spaceDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'rowDemo',
    name: 'rowDemo',
    component: rowDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'listDemo',
    name: 'listDemo',
    component: listDemo,
    meta: {keepAlive: true}
  }
]
