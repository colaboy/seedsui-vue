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
import Weixin from './platform/weixin.js'

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
  /* Base */
  @import "./assets/styles/variables.less";
  @import "./assets/styles/appearance.less";
  @import "./assets/styles/layout.less";
  @import "./assets/styles/input.less";
  @import "./assets/styles/photo.less";
  @import "./assets/styles/titlebar.less";
  @import "./assets/styles/tabbar.less";
  @import "./assets/styles/button.less";
  @import "./assets/styles/mark.less";
  @import "./assets/styles/grid.less";
  @import "./assets/styles/badge.less";

  @import "./assets/styles/row.less";
  @import "./assets/styles/inputbox.less";
  @import "./assets/styles/numbox.less";
  @import "./assets/styles/checkbox.less";
  @import "./assets/styles/range.less";
  @import "./assets/styles/switch.less";
  @import "./assets/styles/turn.less";
  @import "./assets/styles/mask.less";
  @import "./assets/styles/icon.less";

  /* Control */
  @import "./assets/styles/iconfont.less";
  @import "./assets/styles/list.less";
  @import "./assets/styles/timeline.less";
  @import "./assets/styles/filter.less";
  @import "./assets/styles/page.less";
  @import "./assets/styles/star.less";
  @import "./assets/styles/clock.less";
  @import "./assets/styles/timepart.less";
  @import "./assets/styles/indexbar.less";
  @import "./assets/styles/group.less";
  @import "./assets/styles/card.less";
  @import "./assets/styles/aside.less"; 
  @import "./assets/styles/sliver.less";
  @import "./assets/styles/inputcolor.less";
  @import "./assets/styles/progress.less";
  @import "./assets/styles/loading.less";
  @import "./assets/styles/dragrefresh.less";
  @import "./assets/styles/gauge.less";
  @import "./assets/styles/doughnut.less";
  @import "./assets/styles/chat.less";
  @import "./assets/styles/popover.less";
  @import "./assets/styles/sharebox.less";
  @import "./assets/styles/dialog.less";
  @import "./assets/styles/alert.less";
  @import "./assets/styles/actionsheet.less";
  @import "./assets/styles/toast.less";
  @import "./assets/styles/prompt.less";
  @import "./assets/styles/emoji.less";
  @import "./assets/styles/slider.less";
  @import "./assets/styles/richinput.less";
  @import "./assets/styles/scrollpicker.less";
  @import "./assets/styles/summary.less";
  @import "./assets/styles/table.less";
  @import "./assets/styles/tree.less";
  @import "./assets/styles/safelvl.less";
  @import "./assets/styles/weather.less";
  @import "./assets/styles/calendar.less";
  @import "./assets/styles/listpull.less";
  @import "./assets/styles/menuwrap.less";
  @import "./assets/styles/animate.less";

  /* Tool */
  @import "./assets/styles/box.less";
  @import "./assets/styles/global.less";
  @import "./assets/styles/common.less";
  @import "./assets/styles/size.less";
  @import "./assets/styles/border.less";
  @import "./assets/styles/color.less";

  .fade-enter-active,
  .fade-leave-active{
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active{
    opacity: 0;
  }
</style>
