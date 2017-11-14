<template>
  <div :style="css" class="numbox bordered">
    <input type="button" class="numbox-button" :disabled="minusDisabled" value="-" @click.stop.prevent="onClickMinus">
    <input type="number" class="numbox-input" :value="truthValue" @blur.stop.prevent="onBlur" @click.stop.prevent="onClick" @input.stop.prevent="onInput" @change.stop.prevent="onChange">
    <input type="button" class="numbox-button" :disabled="plusDisabled" value="+" @click.stop.prevent="onClickPlus">
  </div>
</template>
<script>
export default {
  name: 'NumBox',
  props: {
    error: {
      type: Function
    },
    change: {
      type: Function
    },
    integer: {
      type: Number
    },
    digits: {
      type: Number
    },
    max: {
      type: Number
    },
    min: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    css: {
      type: String,
      default: ''
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
      minusDisabled: false,
      plusDisabled: false,
      truthValue: this.value
    }
  },
  created () {
    this.disableNum()
  },
  methods: {
    disableNum () {
      if (this.truthValue === '' || this.truthValue <= this.min) {
        this.truthValue = this.min
        this.minusDisabled = true
      } else if (this.max && this.truthValue >= this.max) {
        this.truthValue = this.max
        this.plusDisabled = true
      } else {
        this.minusDisabled = false
        this.plusDisabled = false
      }
    },
    validator () {
      this.disableNum()
      if (this.change) this.change(this.truthValue, ...this.args)
    },
    onClickMinus (e) {
      this.truthValue = Math.Calc.subtract(this.truthValue, 1)
      this.validator()
    },
    onClickPlus (e) {
      if (this.truthValue < 0) {
        this.truthValue = 0
      }
      this.truthValue = Math.Calc.add(this.truthValue, 1)
      this.validator()
    },
    onInput (e) {
      var target = e.target
      var value = this.correctNum(target.value)
      target.value = value
    },
    correctNum (numstr) {
      if (numstr === '') return ''
      var value = ''
      // 判断整数位数
      if (this.integer) {
        var integerVal = ''
        var decimalVal = ''
        if (numstr.indexOf('.') > 0) {
          integerVal = numstr.split('.')[0]
          decimalVal = '.' + numstr.split('.')[1]
        } else {
          integerVal = numstr
        }
        if (integerVal.length > this.integer) {
          // callback error
          if (this.error) this.error('整数位不能超过' + this.integer + '位')
          return (integerVal.substring(0, this.integer) + decimalVal)
        }
      }
      // 判断小数
      if (this.digits) {
        // 如果输入的内容不是一个数字，则转为数字
        if (!/^(0|([1-9][0-9]*))(\.[0-9]*)?$/.test(numstr)) {
          console.log('不是一个正数')
          value = numstr.match(/(0|([1-9][0-9]*))(\.[0-9]+)?/)[0]
          // callback error
          if (this.error) this.error('必须要输入一个正数')
        } else {
          value = numstr
        }
        // 如果小数位超过限制，则截掉多余位数
        if (this.digits) {
          let match = value.match(/\.[0-9]*/)
          if (match && match[0] && match[0].length - 1 > this.digits) {
            var digitsMatch = new RegExp('[0-9]+\\.[0-9]{1,' + this.digits + '}')
            value = value.match(digitsMatch)[0]
            // callback error
            if (this.error) this.error('小数位最多不能超过' + this.digits + '位')
          }
        }
      } else {
        // 如果输入的不是一个正整数，则转为正整数
        if (!/^[1-9]{1,}[0-9]*$/.test(numstr)) {
          const result = numstr.match(/[1-9]{1,}[0-9]*/)
          value = result ? result[0] : '0'
          // callback error
          if (this.error) this.error('必须要输入正整数')
        } else {
          value = numstr
        }
      }
      return value
    },
    onChange (e) {
      var target = e.target
      var value = target.value
      this.truthValue = value
      this.validator()
    },
    onClick (e) {
      var target = e.target
      var value = target.value
      if (value === '0') this.truthValue = ''
    },
    onBlur (e) {
      var target = e.target
      var value = target.value
      if (value === '') this.truthValue = '0'
    }
  },
  mounted () {
    this.disableNum()
  },
  watch: {
    value: function (val, oldval) {
      this.truthValue = val
      this.disableNum()
    }
  }
}
</script>
