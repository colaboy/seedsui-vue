<template>
  <div :class="'clock'+(className && ' '+className)" :style="(color?'border-color:' + color+';':'')+css">
    <div class="clock-hour" :style="color && 'background-color:' + color"></div>
    <div class="clock-minute" :style="color && 'background-color:' + color"></div>
    <div class="clock-origin" :style="color && 'background-color:' + color"></div>
  </div>
</template>
<script>
import {Clock} from './clock.js'
export default {
  name: 'Clock',
  props: {
    className: {
      type: String,
      default: ''
    },
    css: {
      type: String,
      default: ''
    },
    color: {
      type: String
    },
    time: {
      type: String,
      default: '11:30'
    },
    duration: {
      type: Number,
      default: 500
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    this.instance = new Clock(this.$el, {
      time: this.time,
      duration: this.duration,
      delay: this.delay
    })
    setTimeout(() => {
      this.instance.play()
    }, 100)
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "clock.less";
  @import "../seedsui-tool.less";
</style>
