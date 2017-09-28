import titlebarDemo from '@/views/titlebarDemo'
import tabbarDemo from '@/views/tabbarDemo'

export default [
  {
    path: 'titlebarDemo',
    name: 'titlebarDemo',
    component: titlebarDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'tabbarDemo',
    name: 'tabbarDemo',
    component: tabbarDemo,
    meta: {keepAlive: true}
  }
]
