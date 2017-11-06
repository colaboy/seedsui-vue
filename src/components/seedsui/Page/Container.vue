<template>
  <article :class="'container' + (classname?' '+classname:'')" :style="css">
    <slot></slot>
  </article>
</template>
<script>
export default {
  name: 'Container',
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
