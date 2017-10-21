import pickerDemo from '@/views/pickerDemo'
import formDemo from '@/views/formDemo'
import buttonDemo from '@/views/buttonDemo'
import starDemo from '@/views/starDemo'

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
