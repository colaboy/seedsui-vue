<template>
  <section :class="'page' + (classsName?' '+classsName:'')" :style="css">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'Page',
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
