<template>
	<span class="close"><i class="icon icon-close-fill"></i></span>
</template>
<script>
export default {
  name: 'Close',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
  @import "close.less";
  @import "../seedsui-tool.less";
</style>
