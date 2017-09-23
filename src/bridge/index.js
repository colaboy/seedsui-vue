import WeiXin from './weixin'
import WqCordova from './wqcordova'
import Browser from './browser'

var bridge
var ua = navigator.userAgent.toLowerCase()
if (ua.indexOf('micromessenger') > -1) {
  bridge = WeiXin
} else if (ua.indexOf('wqappversion') > -1) {
  bridge = WqCordova
} else {
  bridge = Browser
}

export default bridge
