<template>
  <i :class="'icon' + (classname?' '+classname:'')" :style="css"></i>
</template>
<script>
export default {
  name: 'InputText',
  props: {
    classname: {
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
  @import "../base/tool/icon.less";
  @import "iconfont.less";
</style>
