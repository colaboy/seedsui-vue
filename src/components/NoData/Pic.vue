<template>
  <img :src="imgs.nodata" />
</template>
<script>
  import imgNodata from './nodata.svg'
  export default {
    name: 'Pic',
    data () {
      return {
        imgs: {
          nodata: imgNodata
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../seedsui/seedsui-variables.less";
</style>
