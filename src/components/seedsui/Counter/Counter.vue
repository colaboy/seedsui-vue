<template>
  <span class="counter" :data-duration="duration" :data-from="from" :data-to="to">{{from}}</span>
</template>
<script>
import {Counter} from './counter.js'
export default {
  name: 'Counter',
  props: {
    classsName: {
      type: String,
      default: ''
    },
    css: {
      type: String,
      default: ''
    },
    from: {
      type: Number,
      default: 0
    },
    to: {
      type: Number,
      default: 500
    },
    duration: {
      type: Number,
      default: 5000
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    this.instance = new Counter(this.$el)
    setTimeout(() => {
      this.instance.play()
    }, (this.delay + 100))
  },
  methods: {
  }
}
</script>
<style lang="less">
</style>
