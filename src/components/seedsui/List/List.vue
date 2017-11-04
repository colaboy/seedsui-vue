<template>
  <div v-if="tag === 'div'" :class="'list' + (classname?' '+classname:'')" :style="css">
    <slot></slot>
  </div>
  <ul v-else-if="tag === 'ul'" :class="'list' + (classname?' '+classname:'')" :style="css">
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: 'List',
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
    },
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>
<style lang="less">
  @import "list.less";
  @import "../seedsui-tool.less";
</style>
