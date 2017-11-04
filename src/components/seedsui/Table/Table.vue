<template>
  <table align="center" :style="css" :class="'table ' + classname" style="background-color:white;">
    <slot></slot>
  </table>
</template>
<script>
export default {
  name: 'Table',
  props: {
    classname: {
      type: String,
      default: 'border-tb'
    },
    css: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
  @import "table.less";
  @import "../seedsui-tool.less";
</style>
