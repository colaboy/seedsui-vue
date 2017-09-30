var BridgeWqCordova = {
  /* -------------------
  打开关闭窗口
  ------------------- */
  openWindow: function (url, callback) {
    var json = '{"url":"' + url + '"}'
    /* eslint-disable */
    wq.wqload.wqOpenUrl(callback || null, null, json)
    /* eslint-enable */
  },
  closeWindow: function (data) {
    /* eslint-disable */
    wq.wqload.wqClosePage(data || null)
    /* eslint-enable */
  },
  onBack: function (callback) {
    callback && callback()
  }
}

export default BridgeWqCordova
