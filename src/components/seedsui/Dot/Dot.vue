<template>
	<span class="dot"></span>
</template>
<script>
export default {
  name: 'Dot',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
  @import "dot.less";
  @import "../seedsui-tool.less";
</style>
