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
      type: String,
      default: 'padding:0 8px;'
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
    this.instance = new ImgLazy(this.$el)
  }
}
</script>
