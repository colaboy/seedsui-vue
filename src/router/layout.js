import FlexDemo from '@/views/FlexDemo'
import SpaceDemo from '@/views/SpaceDemo'

export default [
  {
    path: 'FlexDemo',
    name: 'FlexDemo',
    component: FlexDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'SpaceDemo',
    name: 'SpaceDemo',
    component: SpaceDemo,
    meta: {keepAlive: true}
  }
]
