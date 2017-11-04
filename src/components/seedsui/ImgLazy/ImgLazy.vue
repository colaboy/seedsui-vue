<template>
  <div :class="classname" :style="css">
    <slot></slot>
  </div>
</template>
<script>
import ImgLazy from './imglazy.js'
export default {
  name: 'ImgLazy',
  props: {
    css: {
      type: String
    },
    classname: {
      type: String
    }
  },
  data () {
    return {
      instance: null
    }
  },
  methods: {
  },
  mounted () {
    this.instance = new ImgLazy({
      overflowContainer: this.$el
    })
  }
}
</script>
<style lang="less">
  @import "../seedsui-tool.less";
</style>
