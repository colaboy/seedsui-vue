<template>
  <footer :class="'footer' + (classsName?' '+classsName:'')" :style="css">
    <slot></slot>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    classsName: {
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
