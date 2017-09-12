<template>
  <a :class="'button'+(type?' '+type:'')+(block?' block':'')" :style="(block?'-webkit-box-flex:1;':'')+(radius?'border-radius:'+radius+'px;':'')+css" href="javascript:;" @click.stop.prevent="click">
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
    radius: {
      type: Number,
      default: 0
    },
    block: {
      type: Boolean,
      default: false
    },
    type: {
      type: String, // primary|submit|cancel|info|success|warn|disabled
      default: ''
    },
    css: {
      type: String,
      default: ''
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
      type: Function,
      default: function () {}
    },
    params: Object
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
