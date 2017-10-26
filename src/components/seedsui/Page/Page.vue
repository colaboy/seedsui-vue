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
<style lang="less">
  @import "page.less";
  @import "../seedsui-tool.less";
</style>
