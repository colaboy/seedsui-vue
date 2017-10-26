<template>
  <div class="mask">
    <div :style="css" :class="'dialog'+(position?' '+position:'')" :data-animation="animation">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Dialog from './dialog.js'
export default {
  name: 'Dialog',
  props: {
    isClickMaskHide: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      default: 'fade'
    },
    css: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle'
    },
    onClick: {
      type: Function,
      default: null
    },
    onClickMask: {
      type: Function,
      default: null
    },
    onTransitionEnd: {
      type: Function,
      default: null
    },
    onShowed: {
      type: Function,
      default: null
    },
    onHid: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    this.instance = new Dialog({
      mask: this.$el,
      isClickMaskHide: this.isClickMaskHide,
      animation: this.animation,
      position: this.position,
      onClick: this.onClick,
      onClickMask: this.onClickMask,
      onTransitionEnd: this.onTransitionEnd,
      onShowed: this.onShowed,
      onHid: this.onHid
    })
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "dialog.less";
  @import "../seedsui-tool.less";
</style>
