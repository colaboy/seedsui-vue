<template>
	<span :class="'tagline '+position">
		<slot></slot>
	</span>
</template>
<script>
export default {
  name: 'Tagline',
  props: {
    text: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'top right'
    }
  }
}
</script>
<style lang="less">
  @import "tagline.less";
  @import "../seedsui-tool.less";
</style>
