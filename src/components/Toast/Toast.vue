<template>
  <div :class="{ 'mask':true,'toast-mask':true,'active':show,'toast-cover':cover }">
    <div :class="{ 'toast':true,'active':show }">
      <div class="toast-wrapper">{{text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    text: {
      type: String,
      default: ''
    },
    cover: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
