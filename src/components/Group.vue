<template>
  <div class="group">
  	<Sliver v-if="title" :text="title"></Sliver>
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
