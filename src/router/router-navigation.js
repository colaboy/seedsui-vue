import titlebarDemo from '@/containers/titlebarDemo'
import tabbarDemo from '@/containers/tabbarDemo'

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
