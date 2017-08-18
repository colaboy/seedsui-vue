<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import Fastclick from 'Fastclick'
// 微信配置
import Weixin from './bridge/weixin.js'

export default {
  name: 'app',
  mounted () {
    // 微信与安卓配置
    this.$store.dispatch('setPlatform')
    this.$store.dispatch('setOs')
    this.$store.dispatch('setOsVersion')
    if (this.$store.state.platform === 'weixin') {
      /* eslint-disable */
      Weixin.config()
      /* eslint-enable */
    }
    // 点击配置
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function () {
        Fastclick.attach(document.body)
      }, false)
    }
  }
}
</script>

<style lang="less">
  /* SeedsUI */
  @import "./assets/seedsui.less";

  .fade-enter-active,
  .fade-leave-active{
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active{
    opacity: 0;
  }
</style>
