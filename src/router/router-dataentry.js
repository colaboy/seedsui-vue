import pickerDemo from '@/views/pickerDemo'
import formDemo from '@/views/formDemo'
import buttonDemo from '@/views/buttonDemo'
import starDemo from '@/views/starDemo'
import gaugeDemo from '@/views/gaugeDemo'
import doughnutDemo from '@/views/doughnutDemo'
import clockDemo from '@/views/clockDemo'
import progressDemo from '@/views/progressDemo'

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
  },
  {
    path: 'gaugeDemo',
    name: 'gaugeDemo',
    component: gaugeDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'doughnutDemo',
    name: 'doughnutDemo',
    component: doughnutDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'clockDemo',
    name: 'clockDemo',
    component: clockDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'progressDemo',
    name: 'progressDemo',
    component: progressDemo,
    meta: {keepAlive: true}
  }
]
