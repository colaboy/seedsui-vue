<template>
  <div v-if="Boolean(show)" class="loading-mask mask active" id="ID-LoadingFad">
      <slot></slot>
      <div class="loading-fading active">
          <div class="loading-fading-wrapper">
              <div class="loading-fading-blade"></div>
              <div class="loading-fading-blade"></div>
              <div class="loading-fading-blade"></div>
              <div class="loading-fading-blade"></div>
              <div class="loading-fading-blade"></div>
              <div class="loading-fading-blade"></div>
              <div class="loading-fading-blade"></div>
              <div class="loading-fading-blade"></div>
              <div class="loading-fading-blade"></div>
              <div class="loading-fading-blade"></div>
              <div class="loading-fading-blade"></div>
              <div class="loading-fading-blade"></div>
          </div>
          <div class="al-text">{{text}}</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'LoadingFading',
    props: {
      show: {
        default: false
      },
      text: {
        type: String,
        default: '加载中...'
      }
    }
  }
</script>
