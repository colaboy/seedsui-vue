<template>
  <div style="display:none" data-name="wxposition"></div>
</template>
<script>
export default {
  name: 'WxPosition',
  methods: {
    getLocation () {
      var self = this
      /* eslint-disable */
      wx.getLocation({
        // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        type: 'wgs84',
        success: function (res) {
          self.$emit('callback', res)
        },
        error: function (res) {
          self.$emit('callback', res)
        }
      })
      /* eslint-enable */
    }
  },
  mounted () {
    this.getLocation()
  }
}
</script>