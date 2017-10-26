<template>
  <div class="calendar"></div>
</template>
<script>
  import Calendar from './calendar.js'
  export default {
    name: 'Calendar',
    props: {
      type: {
        type: String,
        default: 'month' // week|month
      },
      showTitleWeek: {
        type: Boolean,
        default: true
      },
      showTitleWeeks: {
        type: Boolean,
        default: false
      },
      disableBeforeDate: {
        type: Object,
        default: null
      },
      isYTouch: {
        type: Boolean,
        default: true
      },
      activeDate: {
        type: Date,
        default: () => {
          return new Date()
        }
      },
      change: {
        type: Function
      }
    },
    mounted () {
      if (this.instance) return
      this.instance = new Calendar(this.$el, {
        type: this.viewType,
        showTitleWeek: this.showTitleWeek,
        showTitleWeeks: this.showTitleWeeks,
        disableBeforeDate: this.disableBeforeDate,
        isYTouch: this.isYTouch, // 是否允许竖向滑动
        activeDate: this.activeDate,
        prevHTML: '<i class="icon-arrowleft"></i>',
        nextHTML: '<i class="icon-arrowright"></i>',
        onChange: (e) => {
          this.change && this.change(e.activeDate)
        }
      })
    }
  }
</script>
<style lang="less" scoped>
  @import "calendar.less";
  @import "../seedsui-tool.less";
</style>
