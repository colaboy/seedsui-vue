<template>
  <a :class="'button '+buttonClass" :style="buttonCss" @click="onClickHandler">
      <i v-if="showIcon" :class="iconClass"></i>
      <span>{{text}}</span>
      <span v-if="Boolean(showTip)" :class="tipClass">{{tipText}}</span>
  </a>
</template>
<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: '按钮'
    },
    tipText: {
      type: String,
      default: '0'
    },
    buttonClass: {
      type: String,
      default: 'text-center'
    },
    buttonCss: {
      type: String,
      default: 'padding:0 8px;'
    },
    showTip: {
      default: false
    },
    tipClass: {
      type: String,
      default: 'tip'
    },
    showIcon: {
      default: false
    },
    iconClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onClickHandler (e) {
      this.$emit('onClick', this)
    }
  }
}
</script>
