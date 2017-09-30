import bridge from '@/bridge'
var mixinBackPress = {
  watch: {
    '$route' (to, from) {
      if (to.name === 'storemanager') {
        // 绑定返回按键
        bridge.onBack(function () {
          bridge.closeWindow()
        })
      }
    }
  },
  mounted () {
    // 绑定返回按键
    bridge.onBack(function () {
      bridge.closeWindow()
    })
  }
}

export default mixinBackPress
