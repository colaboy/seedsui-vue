<template>
	<i :class="'dot' + (active ? ' active' : '')" :style="getSize"></i>
</template>
<script>
export default {
  name: 'Dot',
  props: {
    active: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    getSize: () => {
      if (this.css) return 'width:' + this.size + 'height:' + this.size
      return ''
    }
  }
}
</script>
<style lang="less">

</style>
