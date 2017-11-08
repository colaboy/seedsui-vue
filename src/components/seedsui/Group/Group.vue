<template>
  <div class="group" :style="css">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Group',
  props: {
    css: {
      type: String
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
<style lang="less">

</style>
