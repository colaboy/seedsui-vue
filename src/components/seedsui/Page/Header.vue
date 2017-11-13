<template>
  <header :class="'header' + (classsName?' '+classsName:'')" :style="css">
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'Header',
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
