<template>
  <div :class="'timepart' + (classname && ' '+classname)"></div>
</template>
<script>
  import Timepart from './timepart.js'
  export default {
    name: 'Calendar',
    props: {
      classname: {
        type: String
      },
      startTime: {
        type: String,
        default: '7:00' // hh:ss
      },
      endTime: {
        type: String,
        default: '22:00' // hh:ss
      },
      error: {
        type: Function
      }
    },
    mounted () {
      if (this.instance) return
      this.instance = new Timepart(this.$el, {
        startTime: this.startTime,
        endTime: this.endTime,
        onClick: (e) => {
          // console.log(e.target)
        },
        onConflictOver: (e) => {
          this.error && this.error('不能跨选禁用时间段', e.target)
        },
        onConflictContain: (e) => {
          this.error && this.error('时间段冲突', e.target)
        },
        onClickActive: (e) => { // 点击选中区域
          e.removeAllActive()
        },
        onClickDisabled: (e) => { // 点击禁用区域
        },
        onClickChoose: (e) => {
          // var data = JSON.parse(e.target.getAttribute('data-progress'))
          // console.log('点击选择区域，数据：{startTime:' + data.startTime + ',endTime:' + data.endTime + '}')
        },
        onClickValid: (s) => { // 点击有效区域
          if (s.clickCount === 1) { // 如果点击了一次
            this.part1 = s.target
            this.part1.classList.add(s.params.activeClass)
          } else if (s.clickCount === 2) { // 如果点击了两次
            this.part2 = s.target
            // 选中
            var times = s.getTimesByParts(this.part1, this.part2)
            s.activeTimes(times.startTime, times.endTime)
          } else if (s.clickCount === 3) { // 如果点击了三次
            s.removeAllActive()
          }
        }
      })
    }
  }
</script>
<style lang="less">
  @import "timepart.less";
</style>
