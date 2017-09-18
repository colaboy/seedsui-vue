import PickerDemo from '@/views/PickerDemo'
import FormDemo from '@/views/FormDemo'
import ButtonDemo from '@/views/ButtonDemo'
import StarDemo from '@/views/StarDemo'

export default [
  {
    path: 'buttonDemo',
    name: 'buttonDemo',
    component: ButtonDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'pickerDemo',
    name: 'pickerDemo',
    component: PickerDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'formDemo',
    name: 'formDemo',
    component: FormDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'starDemo',
    name: 'starDemo',
    component: StarDemo,
    meta: {keepAlive: true}
  }
]
