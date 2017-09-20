import '@/utils/dateutil.js'
import '@/utils/object.js'
import '@/utils/math.js'
import '@/utils/string.js'
import Alert from './Alert'
import Actionsheet from './Actionsheet'
import Badge from './Badge'
import Button from './Button'
import Caption from './Caption'
import Card from './Card'
import Close from './Close'
import Dialog from './Dialog'
import Dot from './Dot'
import Group from './Group'
import LoadingFloating from './LoadingFloating'
import LoadingFilling from './LoadingFilling'
import Mark from './Mark'
import Peg from './Peg'
import Star from './Star'
import Sticker from './Sticker'
import Tabbar from './Tabbar'
import Tagline from './Tagline'
import Tip from './Tip'
import Titlebar from './Titlebar'
import Toast from './Toast'
import Prompt from './Prompt'
import Popover from './Popover'
import Picker from './Picker'
import InputDate from './Picker/InputDate.vue'
import InputCity from './Picker/InputCity.vue'
import Grid from './Grid'
import ShareBox from './ShareBox'
import Switch1 from './Switch'
import Turn from './Turn'
import NumBox from './NumBox'
import Carrousel from './Carrousel'
import ImgLazy from './ImgLazy'
import InputPre from './InputPre'
import InputSearch from './InputSearch'
import DropdownBox from './DropdownBox'
import Dragrefresh from './Dragrefresh'
import Sliver from './Sliver'
import Mask1 from './Mask'
import NoData from './NoData'
import NoWifi from './NoWifi'

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
  LoadingFloating,
  LoadingFilling,
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
  ImgLazy,
  InputPre,
  InputSearch,
  DropdownBox,
  Dragrefresh,
  Sliver,
  Mask1,
  NoData,
  NoWifi
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
