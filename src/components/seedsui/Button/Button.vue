<template>
  <a :class="'button' + (classsName ? ' ' + classsName : '')" :style="css" @click.stop.prevent="onClickBtn">
      <Icon v-if="licon" :class="licon"/>
      <span v-if="isShowSpan">{{text}}</span>
      <template v-else>{{text}}</template>
      <Icon v-if="ricon" :classsName="ricon"/>
      <span v-if="tipText" class="tip">{{tipText}}</span>
      <span v-if="badgeText" class="badge">{{badgeText}}</span>
  </a>
</template>
<script>
export default {
  name: 'Button',
  props: {
    css: {
      type: String,
      default: ''
    },
    classsName: {
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
    licon: {
      type: String,
      default: ''
    },
    ricon: {
      type: String,
      default: ''
    },
    onClick: {
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
  computed: {
    isShowSpan: () => {
      if (this.ricon || this.tipText || this.badgeText) return true
      return false
    }
  },
  mounted () {
  },
  methods: {
    onClickBtn (e) {
      if (this.onClick) this.onClick(e, ...this.args)
    }
  }
}
</script>
<style lang="less">

</style>
