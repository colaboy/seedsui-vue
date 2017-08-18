import '@/utils/dateutil.js'
import '@/utils/object.js'
import Alert from '@/components/Alert'
import Actionsheet from '@/components/Actionsheet'
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import Caption from '@/components/Caption'
import Card from '@/components/Card'
import Close from '@/components/Close'
import Dialog from '@/components/Dialog'
import Dot from '@/components/Dot'
import Group from '@/components/Group'
import LoadingFading from '@/components/LoadingFading'
import LoadingSpinning from '@/components/LoadingSpinning'
import Mark from '@/components/Mark'
import Peg from '@/components/Peg'
import Star from '@/components/Star'
import Sticker from '@/components/Sticker'
import Tabbar from '@/components/Tabbar'
import Tagline from '@/components/Tagline'
import Tip from '@/components/Tip'
import Titlebar from '@/components/Titlebar'
import Toast from '@/components/Toast'
import Prompt from '@/components/Prompt'
import Popover from '@/components/Popover'
import Picker from '@/components/Picker'
import InputDate from '@/components/Picker/InputDate.vue'
import InputCity from '@/components/Picker/InputCity.vue'
import Grid from '@/components/Grid'
import ShareBox from '@/components/ShareBox'
import Switch1 from '@/components/Switch'
import Turn from '@/components/Turn'
import NumBox from '@/components/NumBox'
import Carrousel from '@/components/Carrousel'
import ImgLazy from '@/components/ImgLazy'

var seedsui = {
  Alert,
  Actionsheet,
  Badge,
  Button,
  Caption,
  Card,
  Close,
  Dialog,
  Dot,
  Group,
  LoadingFading,
  LoadingSpinning,
  Mark,
  Peg,
  Star,
  Sticker,
  Tabbar,
  Tagline,
  Tip,
  Titlebar,
  Toast,
  Prompt,
  Popover,
  Picker,
  InputDate,
  InputCity,
  Grid,
  ShareBox,
  Switch1,
  Turn,
  NumBox,
  Carrousel,
  ImgLazy
}

const install = function (Vue) {
  Object.keys(seedsui).forEach((key) => {
    Vue.component(key, seedsui[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(seedsui, {install}) // 不将install方法合并到json中，Vue.use会失败报错
