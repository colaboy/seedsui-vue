import BridgeWx from './bridge-wx'
import BridgeWq from './bridge-wq'
import BridgeWqCordova from './bridge-wqcordova'
import BridgeBrowser from './bridge-browser'

var bridge
var ua = navigator.userAgent.toLowerCase()
if (ua.indexOf('micromessenger') > -1) {
  bridge = BridgeWx
} else if (ua.indexOf('wqappversion') > -1) {
  bridge = BridgeWqCordova
} else if (ua.indexOf('wqappversion') > -1) {
  bridge = new BridgeWq()
} else {
  bridge = BridgeBrowser
}

export default bridge
