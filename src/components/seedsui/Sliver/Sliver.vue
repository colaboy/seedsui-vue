<template>
  <div v-if="tag === 'div'" :class="'sliver' + (classsName?' '+classsName:'')" :style="css">
    <div v-html="licon"></div>
    <div class="sliver-title" v-html="title"></div>
    <div v-html="ricon"></div>
  </div>
</template>
<script>
export default {
  name: 'Sliver',
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
    },
    licon: {
      type: String
    },
    ricon: {
      type: String
    }
  }
}
</script>
<style lang="less">

</style>
