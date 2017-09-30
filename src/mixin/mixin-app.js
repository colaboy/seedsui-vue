import Device from '@/utils/device.js'
import { mapState, mapActions } from 'vuex'

var mixinApp = {
  // vuex
  computed: mapState({
    platform: state => state.system.platform,
    os: state => state.system.os,
    osVersion: state => state.system.osVersion,
    isBack: state => state.router.isBack
  }),
  methods: {
    ...mapActions([
      'setPlatform',
      'setOs',
      'setOsVersion',
      'setIsBack'
    ]),
    onPopstate () {
      this.setIsBack(true)
    }
  },
  mounted () {
    // 微信与安卓配置
    this.setPlatform(Device.platform)
    this.setOs(Device.os)
    this.setOsVersion(Device.osVersion)
    console.log('您当前的操作系统是:' + this.os)
    if (this.platform === 'weixin') {
      /* eslint-disable */
      this.bridge.config()
      /* eslint-enable */
    }
    // 记录历史记录
    window['addEventListener']('popstate', this.onPopstate, false)
  },
  watch: {
    '$route' (to, from) {
      setTimeout(() => {
        let isBack = this.isBack
        if (isBack) {
          this.setIsBack(false)
        } else {
        }
      }, 100)
      // this.setIsBack(false)
    }
  }
}

export default mixinApp
