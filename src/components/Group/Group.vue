<template>
  <div class="group" :style="css">
  	<Caption v-if="title" :text="title"></Caption>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Group',
  props: {
    css: {
      type: String
    },
    title: {
      type: String,
      default: ''
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
