<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import mixinDevice from '@/mixin/mixin-device.js'
import mixinBackPress from '@/mixin/mixin-backpress.js'
export default {
  name: 'app',
  mixins: [mixinDevice, mixinBackPress]
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
