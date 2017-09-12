<template>
  <div :style="css" class="numbox bordered">
    <input type="button" class="numbox-button" :disabled="minusDisabled" value="-" @click.stop.prevent="onClickMinus">
    <input type="tel" class="numbox-input" :value="truthValue" @input.stop.prevent="onInput" @change.stop.prevent="onChange">
    <input type="button" class="numbox-button" :disabled="plusDisabled" value="+" @click.stop.prevent="onClickPlus">
  </div>
</template>
<script>
export default {
  name: 'NumBox',
  props: {
    change: {
      type: Function
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
      type: Array
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
    if (this.min && this.truthValue <= this.min) {
      this.truthValue = this.min
      this.minusDisabled = true
    }
    if (this.max && this.truthValue >= this.max) {
      this.truthValue = this.max
      this.minusDisabled = true
    }
  },
  methods: {
    disabled () {
      if (this.truthValue <= this.min) {
        this.minusDisabled = true
      } else if (this.truthValue >= this.max) {
        this.plusDisabled = true
      } else {
        this.minusDisabled = false
        this.plusDisabled = false
      }
    },
    validator () {
      if (this.truthValue === '') this.truthValue = this.min
      this.disabled()
      if (this.change) this.change(this.truthValue, ...this.args)
    },
    onClickMinus (e) {
      this.truthValue--
      this.validator()
    },
    onClickPlus (e) {
      if (this.truthValue < 0) {
        this.truthValue = 0
      }
      this.truthValue++
      this.validator()
    },
    onInput (e) {
      var target = e.target
      var value = target.value
      console.log(value)
      if (!/^[1-9]{1,}[0-9]*$/.test(value)) {
        target.value = value.substring(0, value.length - 1)
      }
    },
    onChange (e) {
      var target = e.target
      var value = target.value
      this.truthValue = value
      this.validator()
    }
  },
  mounted () {
    this.disabled()
  },
  watch: {
    value: function (val, oldval) {
      this.truthValue = val
      this.disabled()
    }
  }
}
</script>
