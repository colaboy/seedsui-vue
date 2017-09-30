<template>
  <section :class="'page' + (className?' '+className:'')" :style="css">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'Page',
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
