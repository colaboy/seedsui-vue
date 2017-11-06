<template>
  <span v-if="show" :class="'mark-'+type" :style="css" @click="click">{{text}}</span>
</template>
<script>
export default {
  name: 'Mark',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    show: {
      type: Boolean,
      default: true
    },
    css: {
      type: String,
      default: 'padding:0 8px;'
    },
    text: {
      type: String,
      default: '标签'
    },
    click: {
      type: Function,
      default: function () {}
    }
  },
  methods: {
  }
}
</script>
<style lang="less">

</style>
