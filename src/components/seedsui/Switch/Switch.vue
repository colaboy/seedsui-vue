<template>
  <div :style="css" :class="'switch'+(theme==='reverse'?' '+theme:'')+(on.text&&off.text?'':' notext')+(isActive?' active':'')" :data-on="on.text" :data-off="off.text" @click.stop.prevent="onClick">
    <div class="switch-handle"></div>
  </div>
</template>
<script>
export default {
  name: 'Switch',
  props: {
    theme: {
      type: String,
      default: ''
    },
    change: {
      type: Function
    },
    on: {
      type: Object,
      default: function () {
        return {
          text: '是',
          value: '1'
        }
      }
    },
    off: {
      type: Object,
      default: function () {
        return {
          text: '否',
          value: '0'
        }
      }
    },
    css: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isActive: false,
      value: '0'
    }
  },
  methods: {
    onClick (e) {
      this.isActive = !this.isActive
      this.value = this.isActive ? this.on.value : this.off.value
      if (this.change) this.change(this.value)
    }
  }
}
</script>
<style lang="less">
  @import "switch.less";
</style>
