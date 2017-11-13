<template>
  <div class="mask">
    <div class="picker">
      <div class="picker-header">
        <a class="picker-cancel">取消</a>
        <a class="picker-done">完成</a>
      </div>
      <div class="picker-wrapper">
        <div class="picker-slots"></div>
        <div class="picker-layer">
          <div class="picker-layer-frame"></div>
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
    onClickSubmit: {
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
        this.clickSubmit(e)
      }
    })
  },
  methods: {
  }
}
</script>
<style lang="less">

</style>
