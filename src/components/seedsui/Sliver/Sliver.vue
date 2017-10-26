<template>
  <div :class="'sliver' + (className?' '+className:'')" :style="css">{{title}}</div>
</template>
<script>
export default {
  name: 'Sliver',
  props: {
    title: {
      type: String,
      default: ''
    },
    className: {
      type: String
    },
    css: {
      type: String
    }
  }
}
</script>
<style lang="less">
  @import "sliver.less";
  @import "../seedsui-tool.less";
</style>
