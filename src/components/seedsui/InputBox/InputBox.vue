<template>
  <div :class="'inputbox' + (classsName?' '+classsName:'')" :style="css">
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
    classsName: {
      type: String
    },
    css: {
      type: String
    }
  }
}
</script>
<style lang="less">

</style>
