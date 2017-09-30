import BridgeWeiXin from './bridge-weixin'
import BridgeWqCordova from './bridge-wqcordova'
import BridgeBrowser from './bridge-browser'

var bridge
var ua = navigator.userAgent.toLowerCase()
if (ua.indexOf('micromessenger') > -1) {
  bridge = BridgeWeiXin
} else if (ua.indexOf('wqappversion') > -1) {
  bridge = BridgeWqCordova
} else {
  bridge = BridgeBrowser
}

export default bridge
