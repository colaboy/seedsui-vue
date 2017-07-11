<template>
  <div class="titlebar">
    <div class="titlebar-left">
      <slot name="left">
        <a v-if="isShowBack" class="titlebar-button" href="javascript:history.go(-1)">
            <i class="icon icon-arrowleft"></i>
        </a>
      </slot>
    </div>
    <h1 :class="'titlebar-title '+titleClass" :style="titleCss">{{title}}</h1>
    <div class="titlebar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Titlebar',
  props: {
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
      default: 'text-center'
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
    onClickHandler (e) {
      // this.$emit('onClickOk', this)
      this.onClickOk(this)
    }
  },
  computed: {
    isShowBack: function () {
      return Boolean(this.back) && !this.isIos && !this.isWeixin
    }
  }
}
</script>
