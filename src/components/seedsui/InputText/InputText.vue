<template>
  <input :type="type" css="css" :placeholder="placeholder" class="input-text"/>
</template>
<script>
export default {
  name: 'InputText',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    css: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String
    },
    change: {
      type: Function
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less">
  @import "inputtext.less";
</style>
