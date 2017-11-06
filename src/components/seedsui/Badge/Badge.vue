<template>
	<span class="badge">{{text}}</span>
</template>
<script>
export default {
  name: 'Badge',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less">

</style>
