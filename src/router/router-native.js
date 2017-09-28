import mediaDemo from '@/views/mediaDemo'
import mapDemo from '@/views/mapDemo'
import otherDemo from '@/views/otherDemo'

export default [
  {
    path: 'mediaDemo',
    name: 'mediaDemo',
    component: mediaDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'mapDemo',
    name: 'mapDemo',
    component: mapDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'otherDemo',
    name: 'otherDemo',
    component: otherDemo,
    meta: {keepAlive: true}
  }
]
