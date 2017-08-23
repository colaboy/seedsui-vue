<template>
  <div :style="css" class="numbox bordered">
    <input type="button" class="button" :disabled="minusDisabled" value="-" @click.stop.prevent="onClickMinus">
    <input type="number" class="input-text" :value="truthValue" @input.stop.prevent="onInput" @change.stop.prevent="onChange">
    <input type="button" class="button" :disabled="plusDisabled" value="+" @click.stop.prevent="onClickPlus">
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
      type: String
    },
    min: {
      type: String,
      default: '0'
    },
    value: {
      type: String,
      default: '0'
    },
    css: {
      type: String,
      default: ''
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
    validator () {
      if (this.change) this.change(this.truthValue)
      if (this.min && this.truthValue <= this.min) {
        this.minusDisabled = true
      } else if (this.max && this.truthValue >= this.max) {
        this.plusDisabled = true
      } else {
        this.minusDisabled = false
        this.plusDisabled = false
      }
    },
    onClickMinus (e) {
      this.truthValue--
      this.validator()
    },
    onClickPlus (e) {
      this.truthValue++
      if (this.change) this.change(this.truthValue)
      this.validator()
    },
    onInput (e) {
      var target = e.target
      var value = target.value
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
  }
}
</script>
