<template>
  <a :class="'button '+type" :style="css" href="javascript:;" @click.stop.prevent="click">
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
    type: {
      type: String, // primary|submit|cancel|info|success|warn|disabled
      default: ''
    },
    css: {
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
    },
    click: {
      type: Function
    },
    params: Object
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
