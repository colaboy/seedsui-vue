import mediaDemo from '@/containers/mediaDemo'
import mapDemo from '@/containers/mapDemo'
import otherDemo from '@/containers/otherDemo'

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
