<template>
  <div v-if="tag === 'div'" :class="'list-li' + (classsName?' '+classsName:'')" :style="css">
    <slot></slot>
  </div>
  <li v-else-if="tag === 'li'" :class="'list-li' + (classsName?' '+classsName:'')" :style="css">
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
