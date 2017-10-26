<template>
  <article :class="'container' + (className?' '+className:'')" :style="css">
    <slot></slot>
  </article>
</template>
<script>
export default {
  name: 'Container',
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
