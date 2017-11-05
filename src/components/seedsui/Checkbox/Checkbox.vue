<template>
	<input type="checkbox" class="checkbox" :style="css" :name="name" :value="value"/>
</template>
<script>
export default {
  name: 'Checkbox',
  props: {
    css: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less">
  @import "checkbox.less";
</style>
