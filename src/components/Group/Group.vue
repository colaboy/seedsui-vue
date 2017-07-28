<template>
  <div class="group">
  	<Caption v-if="title" :text="title"></Caption>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Group',
  props: {
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
