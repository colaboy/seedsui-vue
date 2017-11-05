<template>
  <div class="gauge-box">
    <div class="gauge">
      <div class="gauge-pointer"></div>
      <div class="gauge-text">0</div>
    </div>
  </div>
</template>
<script>
import Gauge from './gauge.js'
export default {
  name: 'Gauge',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    current: {
      type: Number, // primary|submit|cancel|info|success|warn|disabled
      default: 0
    },
    delay: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2000
    },
    onOut: {
      type: Function
    },
    onChangeStart: {
      type: Function
    },
    onChangeEnd: {
      type: Function
    }
  },
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    // 渲染页面
    this.instance = new Gauge(this.$el, {
      minValue: this.min,
      maxValue: this.max,
      delay: this.delay,
      currentValue: this.current,
      durationall: this.duration,
      onOut: (e) => {
        this.onOut && this.onOut(e)
      },
      onChangeStart: (e) => {
        console.log('开始')
        this.onChangeStart && this.onChangeStart(e)
      },
      onChangeEnd: (e) => {
        this.onChangeEnd && this.onChangeEnd(e)
      }
    })
    setTimeout(() => {
      this.instance.play()
    }, 100)
  },
  methods: {
  }
}
</script>
<style lang="less">
  @import "gauge.less";
</style>
