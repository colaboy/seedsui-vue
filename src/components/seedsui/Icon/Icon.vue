<template>
  <i :class="'icon' + (className?' '+className:'')" :style="css"></i>
</template>
<script>
export default {
  name: 'InputText',
  props: {
    className: {
      type: String,
      default: ''
    },
    css: {
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
  @import "../extend/icon.less";
  @import "iconfont.less";
  @import "../seedsui-tool.less";
</style>
