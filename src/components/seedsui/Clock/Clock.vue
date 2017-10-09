<template>
  <div :class="'clock'+(className && ' '+className)" :style="css">
    <div class="clock-hour"></div>
    <div class="clock-minute"></div>
    <div class="clock-origin"></div>
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
