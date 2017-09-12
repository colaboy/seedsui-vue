import DragRefreshDemo from '@/views/DragRefreshDemo'
import PullListDemo from '@/views/PullListDemo'

export default [
  {
    path: 'DragRefreshDemo',
    name: 'DragRefreshDemo',
    component: DragRefreshDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'PullListDemo',
    name: 'PullListDemo',
    component: PullListDemo,
    meta: {keepAlive: true}
  }
]
