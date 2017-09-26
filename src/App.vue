<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// 微信配置
import Weixin from './bridge/weixin.js'
import Device from '@/utils/device.js'
// vuex
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  // vuex
  computed: mapState({
    platform: state => state.system.platform,
    os: state => state.system.os,
    osVersion: state => state.system.osVersion
  }),
  methods: {
    // vuex
    ...mapActions([
      'setPlatform',
      'setOs',
      'setOsVersion'
    ])
  },
  mounted () {
    // 微信与安卓配置
    // vuex
    this.setPlatform(Device.platform)
    this.setOs(Device.os)
    this.setOsVersion(Device.osVersion)
    console.log(this.os)
    if (this.platform === 'weixin') {
      /* eslint-disable */
      Weixin.config()
      /* eslint-enable */
    }
  }
}
</script>

<style lang="less">
  /* SeedsUI */
  @import "./assets/seedsui/seedsui.less";
  /* router过渡动画 */
  .slide-enter-active {
    animation-name: slide-in;
    animation-duration: .3s;
  }
  .slide-leave-active {
    animation-name: slide-out;
    animation-duration: .3s;
  }
  @keyframes slide-in {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slide-out {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
