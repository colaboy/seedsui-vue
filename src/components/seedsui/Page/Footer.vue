<template>
  <footer :class="'footer' + (classname?' '+classname:'')" :style="css">
    <slot></slot>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    classname: {
      type: String,
      default: ''
    },
    css: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less">

</style>
