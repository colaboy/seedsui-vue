import './seedsui.less'
import '@/utils/dateutil.js'
import '@/utils/object.js'
import '@/utils/math.js'
import '@/utils/string.js'
import Page from './Page/Page.vue'
import Container from './Page/Container.vue'
import Header from './Page/Header.vue'
import Footer from './Page/Footer.vue'
import Icon from './Icon/Icon.vue'
import Alert from './Alert/Alert.vue'
import Actionsheet from './Actionsheet/Actionsheet'
import Badge from './Badge/Badge.vue'
import Button from './Button/Button.vue'
import Card from './Card/Card.vue'
import Close from './Close/Close.vue'
import Dialog from './Dialog/Dialog.vue'
import Dot from './Dot/Dot.vue'
import Group from './Group/Group.vue'
import LoadingFloating from './Loading/LoadingFloating.vue'
import LoadingFilling from './Loading/LoadingFilling.vue'
import Mark from './Mark/Mark.vue'
import Peg from './Peg/Peg.vue'
import Star from './Star/Star.vue'
import Sticker from './Sticker/Sticker.vue'
import Tabbar from './Tabbar/Tabbar.vue'
import Tagline from './Tagline/Tagline.vue'
import Tip from './Tip/Tip.vue'
import Titlebar from './Titlebar/Titlebar.vue'
import Toast from './Toast/Toast.vue'
import Prompt from './Prompt/Prompt.vue'
import Popover from './Popover/Popover.vue'
import InputBox from './InputBox/InputBox.vue'
import InputPre from './InputPre/InputPre.vue'
import InputText from './InputText/InputText.vue'
import InputSearch from './InputSearch/InputSearch.vue'
import Textarea from './Textarea/Textarea.vue'
import InputDate from './Picker/InputDate.vue'
import InputCity from './Picker/InputCity.vue'
import Picker from './Picker/Picker.vue'
import DatePicker from './Picker/DatePicker.vue'
import CityPicker from './Picker/CityPicker.vue'
import Grid from './Grid/Grid.vue'
import ShareBox from './ShareBox/ShareBox.vue'
import Switch1 from './Switch/Switch.vue'
import Checkbox from './Checkbox/Checkbox.vue'
import Radio from './Radio/Radio.vue'
import Turn from './Turn/Turn.vue'
import NumBox from './NumBox/NumBox.vue'
import Range from './Range/Range.vue'
import Carrousel from './Carrousel/Carrousel.vue'
import ImgLazy from './ImgLazy/ImgLazy.vue'
import Dragrefresh from './Dragrefresh/Dragrefresh.vue'
import List from './List/List.vue'
import Li from './List/Li.vue'
import Sliver from './Sliver/Sliver.vue'
import Mask1 from './Mask/Mask.vue'
import Gauge from './Gauge/Gauge.vue'
import Doughnut from './Doughnut/Doughnut.vue'
import Clock from './Clock/Clock.vue'
import Counter from './Counter/Counter.vue'
import Progress from './Progress/Progress.vue'
import Calendar from './Calendar/Calendar.vue'
import Timepart from './Timepart/Timepart.vue'
import Timeline from './Timeline/Timeline.vue'
import Table from './Table/Table.vue'
import Stencil from './Stencil/Stencil.vue'
import Notice from './Notice/Notice.vue'
import NoWifi from './NoWifi/NoWifi.vue'
import NoData from './NoData/NoData.vue'

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
  Timeline,
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
  NoWifi,
  NoData
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
