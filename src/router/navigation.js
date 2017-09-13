import TitlebarDemo from '@/views/TitlebarDemo'
import TabbarDemo from '@/views/TabbarDemo'

export default [
  {
    path: 'titlebarDemo',
    name: 'titlebarDemo',
    component: TitlebarDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'tabbarDemo',
    name: 'tabbarDemo',
    component: TabbarDemo,
    meta: {keepAlive: true}
  }
]
