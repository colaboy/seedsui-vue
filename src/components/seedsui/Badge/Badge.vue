<template>
	<span class="badge">{{text}}</span>
</template>
<script>
export default {
  name: 'Badge',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
  @import "badge.less";
  @import "../seedsui-tool.less";
</style>
