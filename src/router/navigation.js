import TitlebarDemo from '@/views/TitlebarDemo'
import TabBarDemo from '@/views/TabBarDemo'

export default [
  {
    path: 'titlebarDemo',
    name: 'titlebarDemo',
    component: TitlebarDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'tabBarDemo',
    name: 'tabBarDemo',
    component: TabBarDemo,
    meta: {keepAlive: true}
  }
]
