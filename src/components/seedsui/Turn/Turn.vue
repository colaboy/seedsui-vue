<template>
  <div :style="css" :class="'turn'+(isActive?' active':'')" @click.stop.prevent="onClick">
    <div class="turn-on">{{on.text}}</div>
    <div class="turn-off">{{off.text}}</div>
  </div>
</template>
<script>
export default {
  name: 'Turn',
  props: {
    change: {
      type: Function
    },
    on: {
      type: Object,
      default: function () {
        return {
          text: '时',
          value: '1'
        }
      }
    },
    off: {
      type: Object,
      default: function () {
        return {
          text: '分',
          value: '60'
        }
      }
    },
    css: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isActive: false,
      value: '0'
    }
  },
  methods: {
    onClick (e) {
      this.isActive = !this.isActive
      this.value = this.isActive ? this.on.value : this.off.value
      if (this.change) this.change(this.value)
    }
  }
}
</script>
<style lang="less">

</style>
