<template>
  <i :class="'icon' + (classsName?' '+classsName:'')" :style="css"></i>
</template>
<script>
export default {
  name: 'InputText',
  props: {
    classsName: {
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


</style>
