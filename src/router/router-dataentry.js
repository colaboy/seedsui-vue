import pickerDemo from '@/containers/pickerDemo'
import formDemo from '@/containers/formDemo'
import buttonDemo from '@/containers/buttonDemo'
import starDemo from '@/containers/starDemo'

export default [
  {
    path: 'buttonDemo',
    name: 'buttonDemo',
    component: buttonDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'pickerDemo',
    name: 'pickerDemo',
    component: pickerDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'formDemo',
    name: 'formDemo',
    component: formDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'starDemo',
    name: 'starDemo',
    component: starDemo,
    meta: {keepAlive: true}
  }
]
