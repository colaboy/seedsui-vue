import LoadingDemo from '@/views/LoadingDemo'
import PopupDemo from '@/views/PopupDemo'

export default [
  {
    path: 'loadingDemo',
    name: 'loadingDemo',
    component: LoadingDemo,
    meta: {keepAlive: true}
  },
  {
    path: 'popupDemo',
    name: 'popupDemo',
    component: PopupDemo,
    meta: {keepAlive: true}
  }
]
