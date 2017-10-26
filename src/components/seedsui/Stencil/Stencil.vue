<template>
  <div class="stencil" :class="'stencil stencil-' + type"></div>
</template>
<script>
  export default {
    name: 'Stencil',
    props: {
      type: {
        type: String,
        default: 'list'
      }
    }
  }
</script>
<style lang="less">
  @import "stencil.less";
  @import "../seedsui-tool.less";
</style>
