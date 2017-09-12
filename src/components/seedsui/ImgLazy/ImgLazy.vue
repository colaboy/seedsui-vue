<template>
  <div :class="className" :style="css">
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
    className: {
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
    var overflowContainer = this.$el
    console.log('容器')
    console.log(overflowContainer)
    this.instance = new ImgLazy(overflowContainer)
  }
}
</script>
