<template>
  <div :class="{ 'mask':true,'prompt-mask':true,'active':show,'prompt-propagation':!mask }">
    <div :class="{ 'prompt':true,'active':show }">
      <div class="prompt-wrapper">{{text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Prompt',
  props: {
    text: {
      type: String,
      default: ''
    },
    mask: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less">
  @import "prompt.less";
  @import "../seedsui-tool.less";
</style>
