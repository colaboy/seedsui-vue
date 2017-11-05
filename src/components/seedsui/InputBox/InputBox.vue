<template>
  <div :class="'inputbox' + (classname?' '+classname:'')" :style="css">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'InputBox',
  props: {
    title: {
      type: String,
      default: ''
    },
    classname: {
      type: String
    },
    css: {
      type: String
    }
  }
}
</script>
<style lang="less">
  @import "inputbox.less";
</style>
