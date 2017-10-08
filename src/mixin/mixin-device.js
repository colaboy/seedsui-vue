// 设置设备平台|系统|系统版本
import Device from '@/utils/device.js'
import { mapState, mapActions } from 'vuex'

var mixinApp = {
  computed: mapState({
    platform: state => state.system.platform,
    os: state => state.system.os,
    osVersion: state => state.system.osVersion
  }),
  methods: {
    ...mapActions([
      'setPlatform',
      'setOs',
      'setOsVersion'
    ])
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
  }
}

export default mixinApp
