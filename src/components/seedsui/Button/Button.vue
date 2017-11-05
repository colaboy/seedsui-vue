<template>
  <a :class="'button' + (type ? ' ' + type : '')+(block ? ' block' : '') + (disable ? ' disabled' : '') + (active ? ' active' : '') + (classname ? ' ' + classname : '')" :style="(block ? '-webkit-box-flex:1;' : '')+(radius?'border-radius:'+radius+'px;':'')+css" @click.stop.prevent="onClick">
      <Icon v-if="icon" :class="icon"/>
      <span>{{text}}</span>
      <Icon v-if="ricon" :classname="ricon"/>
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
    active: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
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
    classname: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
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
    ricon: {
      type: String,
      default: ''
    },
    click: {
      type: Function,
      default: function () {}
    },
    args: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    onClick (e) {
      if (this.click) this.click(e, ...this.args)
    }
  }
}
</script>
<style lang="less">
  @import "button.less";
</style>
