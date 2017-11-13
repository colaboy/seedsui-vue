<template>
  <div v-if="tag === 'div'" :class="'list' + (classsName?' '+classsName:'')" :style="css">
    <slot></slot>
  </div>
  <ul v-else-if="tag === 'ul'" :class="'list' + (classsName?' '+classsName:'')" :style="css">
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
    classsName: {
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

</style>
