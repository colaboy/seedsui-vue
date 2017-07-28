<template>
  <div v-if="Boolean(show)" class="loading-mask mask active" style="background-color: white;">
      <slot></slot>
      <div class="loading-spinning active">
          <div class="loading-spinning-wrapper"></div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'LoadingSpinning',
    props: {
      show: {
        default: false
      }
    }
  }
</script>

<style lang="less" scoped>
  .loading-mask{
    background-color: white;
  }
</style>
