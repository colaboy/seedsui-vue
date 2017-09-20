<template>
  <div id="app">
    <router-view></router-view>
    <!-- <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition> -->
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

  .fade-enter-active,
  .fade-leave-active{
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active{
    opacity: 0;
  }
</style>
