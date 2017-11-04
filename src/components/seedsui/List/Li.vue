<template>
  <div v-if="tag === 'div'" :class="'list-li' + (classname?' '+classname:'')" :style="css">
    <slot></slot>
  </div>
  <li v-else-if="tag === 'li'" :class="'list-li' + (classname?' '+classname:'')" :style="css">
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'Li',
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
