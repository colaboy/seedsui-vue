<template>
  <div v-if="show" class="loading-mask mask active" :style="css">
      <slot></slot>
      <div class="loading-filling active">
          <div class="loading-filling-wrapper"></div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'LoadingFilling',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      css: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less">
  @import "loading.less";
  .loading-mask{
    background-color: white;
  }
</style>
