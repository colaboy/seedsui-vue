<template>
  <input :class="className" :style="css" type="text" style="width:100%" readOnly="true" :value="value" :placeholder="placeholder" @click="onClickPicker"/>
</template>

<script>
import DatePicker from './picker.date.js'
export default {
  name: 'InputDate',
  props: {
    type: {
      type: String,
      default: 'date'
    },
    change: {
      type: Function
    },
    className: {
      type: String,
      default: 'input-text'
    },
    css: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择日期'
    },
    data: {
      type: Object
    }
  },
  data () {
    return {
      instance: null,
      defaultYear: '',
      defaultMonth: '',
      defaultDay: '',
      defaultHour: '',
      defaultMinute: ''
    }
  },
  mounted () {
    this.initInstance()
  },
  methods: {
    initInstance () {
      var defaultValue = this.value
      var defaultYear = ''
      var defaultMonth = ''
      var defaultDay = ''
      var defaultHour = ''
      var defaultMinute = ''
      // 默认值
      if (defaultValue) {
        if (this.type === 'date') {
          let dateValues = defaultValue.split('-')
          defaultYear = dateValues[0]
          defaultMonth = dateValues[1]
          defaultDay = dateValues[2]
        } else if (this.type === 'month') {
          let monthValues = defaultValue.split('-')
          defaultYear = monthValues[0]
          defaultMonth = monthValues[1]
        } else if (this.type === 'datetime') {
          let values = defaultValue.split(' ')
          let dateValues = values[0].split('-')
          let timeValues = values[1].split(':')
          defaultYear = dateValues[0]
          defaultMonth = dateValues[1]
          defaultDay = dateValues[2]
          defaultHour = timeValues[0]
          defaultMinute = timeValues[1]
        } else if (this.type === 'time') {
          let timeValues = defaultValue.split(':')
          defaultHour = timeValues[0]
          defaultMinute = timeValues[1]
        }
      }
      // 自定义数据
      var yearsData = null
      var monthsData = null
      var daysData = null
      var hoursData = null
      var minutesData = null
      if (this.data) {
        if (this.data.year) {
          yearsData = this.data.year.map((n) => {
            return {
              'key': '' + n,
              'value': '' + n + '年'
            }
          })
        }
        if (this.data.month) {
          monthsData = this.data.month.map((n) => {
            return {
              'key': '' + n,
              'value': '' + n + '月'
            }
          })
        }
        if (this.data.day) {
          daysData = this.data.day.map((n) => {
            return {
              'key': '' + n,
              'value': '' + n + '日'
            }
          })
        }
        if (this.data.hour) {
          hoursData = this.data.hour.map((n) => {
            return {
              'key': '' + n,
              'value': '' + n + '时'
            }
          })
        }
        if (this.data.minute) {
          minutesData = this.data.minute.map((n) => {
            return {
              'key': '' + n,
              'value': '' + n + '分'
            }
          })
        }
      }
      // render数据
      this.instance = new DatePicker({
        viewType: this.type,
        yearsData: yearsData,
        monthsData: monthsData,
        daysData: daysData,
        hoursData: hoursData,
        minutesData: minutesData,
        defaultYear: defaultYear,
        defaultMonth: defaultMonth,
        defaultDay: defaultDay,
        defaultHour: defaultHour,
        defaultMinute: defaultMinute,
        onClickDone: (e) => {
          if (this.change) this.change(e.activeText)
          e.hide()
        }
      })
    },
    onClickPicker (e) {
      this.instance.update()
      this.instance.show()
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../../assets/seedsui/styles/variables.less";
</style>
