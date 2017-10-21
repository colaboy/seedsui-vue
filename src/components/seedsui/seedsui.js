import '@/utils/dateutil.js'
import '@/utils/object.js'
import '@/utils/math.js'
import '@/utils/string.js'
import Page from './Page'
import Container from './Container'
import Header from './Header'
import Footer from './Footer'
import Alert from './Alert'
import Actionsheet from './Actionsheet'
import Badge from './Badge'
import Button from './Button'
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
import DatePicker from './Picker/DatePicker.vue'
import CityPicker from './Picker/CityPicker.vue'
import Grid from './Grid'
import ShareBox from './ShareBox'
import Switch1 from './Switch'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Turn from './Turn'
import NumBox from './NumBox'
import Range from './Range'
import Carrousel from './Carrousel'
import ImgLazy from './ImgLazy'
import InputPre from './InputPre'
import InputSearch from './InputSearch'
import Dragrefresh from './Dragrefresh'
import Sliver from './Sliver'
import Mask1 from './Mask'
import NoData from './NoData'
import NoWifi from './NoWifi'
import Gauge from './Gauge'
import Doughnut from './Doughnut'
import Clock from './Clock'
import Counter from './Counter'
import Progress from './Progress'
import Calendar from './Calendar'
import Timepart from './Timepart'
import Table from './Table'
import Stencil from './Stencil'

var seedsui = {
  Page,
  Container,
  Header,
  Footer,
  Alert,
  Actionsheet,
  Badge,
  Button,
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
  DatePicker,
  CityPicker,
  Grid,
  ShareBox,
  Switch1,
  Checkbox,
  Radio,
  Turn,
  NumBox,
  Range,
  Carrousel,
  ImgLazy,
  InputPre,
  InputSearch,
  Dragrefresh,
  Sliver,
  Mask1,
  NoData,
  NoWifi,
  Gauge,
  Doughnut,
  Clock,
  Counter,
  Progress,
  Calendar,
  Timepart,
  Table,
  Stencil
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
