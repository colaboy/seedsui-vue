<template>
  <div class="notice" v-show="show" :class="classsName" :style="css">
    <div class="notice-content" @click.stop.prevent="onClickNotice">
      <img class="notice-icon" :src="img"/>
      <p>{{text}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Notice',
    components: {
    },
    props: {
      img: {
        type: String
      },
      text: {
        type: String,
        default: ''
      },
      css: {
        type: String
      },
      classsName: {
        type: String
      },
      show: {
        type: Boolean,
        default: true
      },
      args: {
        type: Array
      },
      onClick: {
        type: Function,
        default: function () {}
      }
    },
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
      onClickNotice (e) {
        if (this.onClick) this.onClick(e, ...this.args)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../seedsui-variables.less";
</style>
