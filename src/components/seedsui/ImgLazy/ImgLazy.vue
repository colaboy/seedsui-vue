<template>
  <div :class="classsName" :style="css">
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
    classsName: {
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
</style>
