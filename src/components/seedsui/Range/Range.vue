<template>
  <div :style="'position:relative;padding:1px 0px;' + css" :class="classname">
    <div ref="refTip" class="range-tooltip" :style="(tipShow?'display:block;':'')+'left:'+tipLeft">{{truthValue}}</div>
    <input ref="refRange" type="range" class="input-range block" :min="min" :max="max" :step="step" :value="truthValue" id="range"/>
  </div>
</template>
<script>
export default {
  name: 'Range',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    css: {
      type: String,
      default: ''
    },
    classname: {
      type: String,
      default: ''
    },
    change: {
      type: Function
    },
    args: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      timeout: null,
      range: null,
      tip: null,
      tipShow: false,
      tipText: '',
      tipLeft: '-10px',
      truthValue: this.value
    }
  },
  watch: {
    value: function (val, oldval) {
      this.truthValue = val
    }
  },
  mounted () {
    this.range = this.$refs.refRange
    this.tip = this.$refs.refTip
    this.events(false)
  },
  methods: {
    events (detach) {
      var action = detach ? 'removeEventListener' : 'addEventListener'
      var target = this.range
      target[action]('touchstart', this.onRangeStart, false)
      target[action]('touchmove', this.onRangeMove, false)
      target[action]('input', this.onRangeMove, false)
      target[action]('touchend', this.onRangeEnd, false)
    },
    onRangeStart (e) {
      window.clearTimeout(this.timeout)
      this.showToolTip(e)
    },
    onRangeMove (e) {
      this.showToolTip(e)
    },
    onRangeEnd (e) {
      this.timeout = setTimeout(() => {
        this.tipShow = false
      }, 1000)
      this.change && this.change(this.truthValue, ...this.args)
    },
    showToolTip (e) {
      this.truthValue = this.range.value
      // 当前值所占百分比
      var percent = ((this.truthValue - this.min) / (this.max - this.min)).toFixed(2)

      // 距左的位置
      var dragRange = this.range.clientWidth * percent
      var offsetLeft = this.range.offsetLeft + dragRange - 10
      // var currentOffsetLeft = offsetLeft - this.range.parentNode.offsetLeft

      // 滑块内部的实际位置
      var currentBallLeft = 28 * percent

      // 当前值的位置-滑块的位置=小球正中间的位置
      var left = offsetLeft - currentBallLeft
      this.tipShow = true
      this.tipText = this.truthValue
      this.tipLeft = left + 'px'
    }
  }
}
</script>
<style lang="less">
  @import "range.less";
  @import "tooltip.less";
  @import "../seedsui-tool.less";
</style>
