<template>
  <div :class="'titlebar '+titlebarClass">
    <div :class="{'titlebar-left':layout==='lcr'}">
      <slot name="left">
        <a v-if="isShowBack" class="titlebar-button" href="javascript:history.go(-1)">
            <i class="icon icon-arrowleft"></i>
        </a>
      </slot>
    </div>
    <h1 :class="'titlebar-title nowrap '+titleClass+' '+titleCenter" :style="titleCss">{{title}}</h1>
    <div :class="{'titlebar-right':layout==='lcr'}">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Titlebar',
  props: {
    layout: {
      type: String,
      default: 'lcr'
    },
    titlebarClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '默认标题'
    },
    titleStyle: {
      type: String,
      default: ''
    },
    titleClass: {
      type: String,
      default: ''
    },
    titleCss: {
      type: String,
      default: ''
    },
    back: {
      default: true
    }
  },
  data () {
    return {
      isWeixin: this.$store.state.isWeixin,
      isAndroid: this.$store.state.isIos
    }
  },
  methods: {
  },
  computed: {
    titleCenter: function () {
      return this.layout === 'lcr' ? 'text-center' : ''
    },
    isShowBack: function () {
      return Boolean(this.back) && !this.isIos && !this.isWeixin
    }
  }
}
</script>
