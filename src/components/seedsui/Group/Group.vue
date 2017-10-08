<template>
  <div class="group" :style="css">
  	<Sliver v-if="title" :title="title"></Sliver>
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
