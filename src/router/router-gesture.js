import DragRefreshDemo from '@/views/DragRefreshDemo'
import PullListDemo from '@/views/PullListDemo'

export default [
  {
    path: 'dragRefreshDemo',
    name: 'dragRefreshDemo',
    component: DragRefreshDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'pullListDemo',
    name: 'pullListDemo',
    component: PullListDemo,
    meta: {keepAlive: true}
  }
]
