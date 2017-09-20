<template>
  <div :class="{ 'mask':true,'toast-mask':true,'active':show,'toast-propagation':!mask }">
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
    mask: {
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
