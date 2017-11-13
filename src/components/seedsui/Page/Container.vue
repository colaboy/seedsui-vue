<template>
  <article :class="'container' + (classsName?' '+classsName:'')" :style="css">
    <slot></slot>
  </article>
</template>
<script>
export default {
  name: 'Container',
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
