<template>
  <footer :class="'footer' + (className?' '+className:'')" :style="css">
    <slot></slot>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    className: {
      type: String,
      default: ''
    },
    css: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../../assets/seedsui/styles/variables.less";
</style>
