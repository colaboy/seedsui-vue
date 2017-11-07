<template>
  <div :class="classname" :style="css">
    <div v-if="topRefresh" class="SID-Dragrefresh-TopContainer df-pull" style="transition-duration: 150ms; height: 0px;">
      <div class="df-pull-box">
        <div class="df-pull-icon"></div>
        <div class="df-pull-caption">下拉可以刷新</div>
      </div>
    </div>
    <slot></slot>
    <div v-if="bottomRefresh" class="SID-Dragrefresh-BottomContainer df-pull" style="height: 50px;">
      <div class="df-pull-box">
        <div class="df-pull-icon df-pull-icon-loading"></div>
        <div class="df-pull-caption">正在加载...</div>
      </div>
    </div>
    <div v-if="bottomRefresh" class="SID-Dragrefresh-ErrorContainer df-pull hide" style="height: 50px;">
      <div class="df-pull-box">
        <div class="df-pull-caption">加载失败，请稍后再试</div>
      </div>
    </div>
    <NoData :show="nodata"></NoData>
  </div>
</template>
<script>

import DragPull from './dragrefresh.pull.js'
import ImgLazy from './../ImgLazy/imglazy.js'
export default {
  name: 'Dragrefresh',
  props: {
    hasMore: {
      type: Boolean
    },
    css: {
      type: String
    },
    classname: {
      type: String
    },
    topRefresh: {
      type: Function
    },
    topComplete: {
      type: Function
    },
    bottomRefresh: {
      type: Function
    },
    bottomComplete: {
      type: Function
    },
    nodata: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    nodata: function (val, oldval) {
      console.log('nodata变化了' + val)
      if (val === true) this.instance.detach()
      else this.instance.attach()
    },
    hasMore: function (val, oldval) {
      if (val === true) {
        console.log('hasMore还有')
        this.instance.setPagination(false, false)
      } else {
        console.log('hasMore没有了')
        this.instance.setPagination(true, true)
      }
    }
  },
  data () {
    return {
      instance: null,
      lazyInstance: null
    }
  },
  mounted () {
    this.instance = new DragPull({
      overflowContainer: this.$el,
      onTopRefresh: this.topRefresh ? this.topRefresh : null, // 头部刷新,加载第一页
      onTopComplete: this.topComplete ? this.topComplete : null, // 头部完成
      onBottomRefresh: this.bottomRefresh ? this.bottomRefresh : null, // 底部刷新,加载下一页
      onBottomComplete: this.bottomComplete ? this.bottomComplete : null, // 底部完成
      onNoData: (e) => {
        console.log('无更多数据了')
      }
    })
    if (this.hasMore === false) this.instance.setPagination(true, true)
    this.lazyInstance = new ImgLazy({
      overflowContainer: this.$el
    })
  },
  methods: {
  }
}
</script>
<style lang="less">

</style>
