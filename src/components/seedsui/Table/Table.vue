<template>
  <table align="center" :style="css" :class="'table ' + classsName" style="background-color:white;">
    <slot></slot>
  </table>
</template>
<script>
export default {
  name: 'Table',
  props: {
    classsName: {
      type: String,
      default: 'border-tb'
    },
    css: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less">

</style>
