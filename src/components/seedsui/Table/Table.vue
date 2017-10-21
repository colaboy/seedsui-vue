<template>
  <table align="center" :style="css" :class="'table ' + className" style="background-color:white;">
    <slot></slot>
  </table>
</template>
<script>
export default {
  name: 'Table',
  props: {
    className: {
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
