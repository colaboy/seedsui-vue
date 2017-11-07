import './seedsui.less'
import '@/utils/dateutil.js'
import '@/utils/object.js'
import '@/utils/math.js'
import '@/utils/string.js'
import Page from './Page'
import Container from './Page/Container.vue'
import Header from './Page/Header.vue'
import Footer from './Page/Footer.vue'
import Icon from './Icon/Icon.vue'
import Alert from './Alert'
import Actionsheet from './Actionsheet'
import Badge from './Badge'
import Button from './Button'
import Card from './Card'
import Close from './Close'
import Dialog from './Dialog'
import Dot from './Dot'
import Group from './Group'
import LoadingFloating from './Loading/LoadingFloating.vue'
import LoadingFilling from './Loading/LoadingFilling.vue'
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
import InputBox from './InputBox/InputBox.vue'
import InputPre from './InputPre'
import InputText from './InputText'
import InputSearch from './InputSearch'
import Textarea from './Textarea'
import InputDate from './Picker/InputDate.vue'
import InputCity from './Picker/InputCity.vue'
import Picker from './Picker'
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
import Dragrefresh from './Dragrefresh'
import List from './List/List.vue'
import Li from './List/Li.vue'
import Sliver from './Sliver'
import Mask1 from './Mask'
import Gauge from './Gauge'
import Doughnut from './Doughnut'
import Clock from './Clock'
import Counter from './Counter'
import Progress from './Progress'
import Calendar from './Calendar'
import Timepart from './Timepart'
import Table from './Table'
import Stencil from './Stencil'
import Notice from './Notice/Notice.vue'
import NoData from './NoData/NoData.vue'
import NoWifi from './NoWifi/NoWifi.vue'

var seedsui = {
  Page,
  Container,
  Header,
  Footer,
  Icon,
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
  InputBox,
  InputPre,
  InputText,
  InputSearch,
  Textarea,
  InputDate,
  InputCity,
  Picker,
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
  Dragrefresh,
  List,
  Li,
  Sliver,
  Mask1,
  Gauge,
  Doughnut,
  Clock,
  Counter,
  Progress,
  Calendar,
  Timepart,
  Table,
  Stencil,
  Notice,
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
