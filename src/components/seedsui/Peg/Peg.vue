<template>
  <span class="peg"></span>
</template>
<script>
export default {
  name: 'Peg',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less">
  @import "peg.less";
  @import "../seedsui-tool.less";
</style>
