<template>
  <div :class="'mask'+(classname?' '+classname:'')+(show?' active':'')" :style="css" @click="click">
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
    classname: {
      type: String
    },
    css: {
      type: String
    },
    click: {
      type: Function,
      default: function () {}
    }
  },
  methods: {
  }
}
</script>
