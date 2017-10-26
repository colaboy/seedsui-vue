<template>
  <div class="card bordered" :style="(radius?'border-radius:'+radius+'px;':'')+css">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    radius: {
      type: Number,
      default: 8
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
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "card.less";
  @import "../seedsui-tool.less";
</style>
