<template>
  <header :class="'header' + (classname?' '+classname:'')" :style="css">
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'Header',
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
