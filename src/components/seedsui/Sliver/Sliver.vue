<template>
  <div v-if="tag === 'div'" :class="'sliver' + (classname?' '+classname:'')" :style="css">{{title}}</div>
  <li v-else-if="tag === 'li'" :class="'sliver' + (classname?' '+classname:'')" :style="css">{{title}}</li>
</template>
<script>
export default {
  name: 'Sliver',
  props: {
    title: {
      type: String,
      default: ''
    },
    classname: {
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
