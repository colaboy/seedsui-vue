<template>
  <div :class="'sliver' + (className?' '+className:'')" :style="css">{{text}}</div>
</template>
<script>
export default {
  name: 'Sliver',
  props: {
    text: {
      type: String,
      default: ''
    },
    className: {
      type: String
    },
    css: {
      type: String
    }
  }
}
</script>
