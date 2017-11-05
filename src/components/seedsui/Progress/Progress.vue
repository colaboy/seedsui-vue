<template>
  <div class="progress" :style="'border-radius: ' + radius + 'px;'+css">
    <span :class="'progress-bar' + (theme?' '+theme:'')" :style="'width: '+ width +';border-radius: ' + radius + 'px;' + (color?' background-color:'+color+';':'') + (border?' border-color:'+border+';':'')"></span>
    <span class="progress-text left" v-if="text" v-html="text"></span>
  </div>
</template>
<script>
export default {
  name: 'Progress',
  props: {
    css: {
      type: String,
      default: ''
    },
    radius: {
      type: Number,
      default: 40
    },
    width: {
      type: String,
      default: '30%'
    },
    text: {
      type: String
    },
    theme: {
      type: String
    },
    color: {
      type: String
    },
    border: {
      type: String
    }
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
<style lang="less">
  @import "progress.less";
</style>
