<template>
  <div class="card bordered" :style="css">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    css: {
      type: String,
      default: 'padding:0 8px;'
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
