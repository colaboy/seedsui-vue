<template>
  <div :class="'doughtut '+theme+' rotate'+rotate" :style="css">
    <div class="doughtut-wrapper left">
      <div class="doughtut-circle left"></div>
    </div>
    <div class="doughtut-wrapper right">
      <div class="doughtut-circle right"></div>
    </div>
    <div class="doughtut-label">{{text}}</div>
  </div>
</template>
<script>
export default {
  name: 'Doughnut',
  props: {
    theme: {
      type: String,
      default: 'yellow'
    },
    rotate: {
      type: String,
      default: '15'
    },
    css: {
      type: String,
      default: 'margin:0 auto;'
    },
    text: {
      type: String,
      default: '待审批'
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
