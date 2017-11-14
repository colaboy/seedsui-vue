<template>
  <div :class="'mask'+(classsName?' '+classsName:'')+(show?' active':'')" :style="css" @click.stop.prevent="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Mask',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    show: {
      type: Boolean,
      default: true
    },
    classsName: {
      type: String
    },
    css: {
      type: String
    },
    onClick: {
      type: Function,
      default: function () {}
    }
  },
  methods: {
  }
}
</script>
