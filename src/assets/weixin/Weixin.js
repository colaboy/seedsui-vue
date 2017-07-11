class Weixin {
  getLocation (callback) {
    /* eslint-disable */
    wx.getLocation({
      // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      type: 'wgs84',
      success: function (res) {
        if(callback)callback(res)
      },
      fail: function (res) {
        if(callback)callback(res)
      }
    })
    /* eslint-enable */
  }
}

export default Weixin
