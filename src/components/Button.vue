<template>
  <a :class="'button '+buttonClass" :style="buttonCss" @click="onClickHandler">
      <i v-if="icon" :class="'icon '+icon"></i>
      <span>{{text}}</span>
      <span v-if="tipText" class="tip">{{tipText}}</span>
      <span v-if="badgeText" class="badge">{{badgeText}}</span>
  </a>
</template>
<script>
export default {
  name: 'Button',
  props: {
    buttonClass: {
      type: String,
      default: 'text-center'
    },
    buttonCss: {
      type: String,
      default: 'padding:0 8px;'
    },
    text: {
      type: String,
      default: '按钮'
    },
    tipText: {
      type: String,
      default: ''
    },
    badgeText: {
      type: String,
      default: ''
    },
    icon: {
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
