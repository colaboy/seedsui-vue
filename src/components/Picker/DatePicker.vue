<template>
  <div :class="'mask'+(show?' active':'')">
    <div :class="'scrollpicker'+(show?' active':'')">
      <div class="scrollpicker-header">
        <a class="scrollpicker-cancel">取消</a>
        <a class="scrollpicker-done">完成</a>
      </div>
      <div class="scrollpicker-wrapper">
        <div class="scrollpicker-slots"></div>
        <div class="scrollpicker-layer">
          <div class="scrollpicker-layer-frame"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SpDate from './picker.date.js'
export default {
  name: 'DatePicker',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    viewType: {
      type: String,
      default: 'date'
    },
    isClickMaskHide: {
      type: Boolean,
      default: true
    },
    clickOk: {
      type: Function
    },
    clickCancel: {
      type: Function
    }
  },
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    this.instance = new SpDate({
      mask: this.$el,
      viewType: this.viewType,
      isClickMaskHide: this.isClickMaskHide,
      onClickDone: (e) => {
        this.clickOk(e)
      },
      onClickCancel: (e) => {
        this.clickCancel(e)
      }
    })
  },
  methods: {
  }
}
</script>
