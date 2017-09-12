<template>
  <div :class="{ 'mask':true,'toast-mask':true,'active':show,'toast-propagation':propagation }">
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
    propagation: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
