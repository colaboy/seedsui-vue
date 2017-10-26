<template>
  <textarea css="css" :placeholder="placeholder" class="textarea"></textarea>
</template>
<script>
export default {
  name: 'Textarea',
  props: {
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
  @import "textarea.less";
  @import "../seedsui-tool.less";
</style>
