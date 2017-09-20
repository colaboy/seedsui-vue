<template>
  <div v-if="show" class="loading-mask mask active" id="ID-LoadingFad" :style="css">
      <slot></slot>
      <div class="loading-floating active">
          <div class="loading-floating-wrapper">
              <div class="loading-floating-blade"></div>
              <div class="loading-floating-blade"></div>
              <div class="loading-floating-blade"></div>
              <div class="loading-floating-blade"></div>
              <div class="loading-floating-blade"></div>
              <div class="loading-floating-blade"></div>
              <div class="loading-floating-blade"></div>
              <div class="loading-floating-blade"></div>
              <div class="loading-floating-blade"></div>
              <div class="loading-floating-blade"></div>
              <div class="loading-floating-blade"></div>
              <div class="loading-floating-blade"></div>
          </div>
          <div class="al-text">{{text}}</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'LoadingFloating',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      css: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: '加载中...'
      }
    }
  }
</script>
