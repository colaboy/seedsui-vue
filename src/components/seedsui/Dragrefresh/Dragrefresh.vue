<template>
  <div :class="className" :style="css">
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
  </div>
</template>
<script>

import DragPull from './dragrefresh.pull.js'
export default {
  name: 'Dragrefresh',
  props: {
    css: {
      type: String
    },
    className: {
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
    }
  },
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    this.instance = new DragPull({
      overflowContainer: this.$el,
      topContainer: this.topRefresh ? !0 : false,
      bottomContainer: this.bottomRefresh ? !0 : false,
      onTopRefresh: (e) => {
        // 头部刷新,加载第一页
        if (this.topRefresh) this.topRefresh(e)
      },
      onTopComplete: (e) => {
        if (this.topComplete) this.topComplete(e)
      },
      onBottomRefresh: (e) => {
        // 底部刷新,加载下一页
        if (this.bottomRefresh) this.bottomRefresh(e)
      },
      onBottomComplete: (e) => {
        if (this.bottomComplete) this.bottomComplete(e)
      },
      onNoData: (e) => {
        console.log('无更多数据了')
      }
    })
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "../../../assets/seedsui/styles/variables.less";
  .scrollContainer{
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>
