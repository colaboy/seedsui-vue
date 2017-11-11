<template>
  <div class="timeline" :style="css">
    <span class="timeline-line" :style="`top: ${top};bottom: ${bottom}`"></span>
    <div v-for="(item, index) in list" :key="index" :class="'timeline-case' + (item.active ? ' active' : '')">
      <div class="timeline-badge" v-html="item.icon"></div>
      <div v-html="item.content"></div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Timeline',
  props: {
    list: {
      type: Array,
      default: []
    },
    css: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: 0
    },
    bottom: {
      type: String,
      default: 0
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less">

</style>
