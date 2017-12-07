<template>
  <i :class="'icon' + (classsName?' '+classsName:'')" :style="'background-image: url(' + src + ');' + css"></i>
</template>
<script>
export default {
  name: 'Icon',
  props: {
    classsName: {
      type: String,
      default: ''
    },
    css: {
      type: String,
      default: ''
    },
    src: {
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
</style>
