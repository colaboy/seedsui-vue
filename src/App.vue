<template>
  <div id="app">
    <LoadingFilling :show="isLoading"></LoadingFilling>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <NoWifi :show="!onLine" css="top:44px"></NoWifi>
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
  /* SeedsUI */
  @import "./components/seedsui/seedsui-core.less";
  @import "./assets/styles/router.less";
</style>
