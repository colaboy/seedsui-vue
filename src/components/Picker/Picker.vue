<template>
  <div class="mask">
    <div class="scrollpicker">
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
import Picker from './picker.js'
export default {
  name: 'Picker',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    isClickMaskHide: {
      type: Boolean,
      default: false
    },
    onClickOk: {
      type: Function
    },
    onClickCancel: {
      type: Function
    }
  },
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    this.instance = new Picker({
      mask: this.$el,
      onClickDone: (e) => {
        this.onClickOk(e)
      }
    })
  },
  methods: {
  }
}
</script>
