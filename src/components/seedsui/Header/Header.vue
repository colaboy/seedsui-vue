<template>
  <header :class="'header' + (className?' '+className:'')" :style="css">
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'Header',
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
  @import "../../../assets/seedsui/seedsui-variables.less";
</style>
