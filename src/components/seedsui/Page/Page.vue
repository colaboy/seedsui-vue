<template>
  <section :class="'page' + (classname?' '+classname:'')" :style="css">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'Page',
  props: {
    classname: {
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
