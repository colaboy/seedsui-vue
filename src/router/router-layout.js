import flexDemo from '@/views/flexDemo'
import spaceDemo from '@/views/spaceDemo'
import rowDemo from '@/views/rowDemo'
import listDemo from '@/views/listDemo'

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
