<template>
  <div id="app">
    <LoadingFilling :show="isLoading"></LoadingFilling>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Notice :show="!onLine" css="top:44px" type="nowifi"></Notice>
  </div>
</template>

<script>
// 安卓物理返回按键监听
import mixinBackPress from '@/mixin/mixin-backpress.js'
// 页面过渡Loading
import mixinLoading from '@/mixin/mixin-loading.js'
export default {
  name: 'app',
  mixins: [mixinBackPress, mixinLoading]
}
</script>

<style lang="less">
  @import "./assets/styles/router.less";
</style>
