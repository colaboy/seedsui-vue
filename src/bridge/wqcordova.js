var WqCordova = {
  /* -------------------
  打开关闭窗口
  ------------------- */
  open: function (url, callback) {
    var json = '{"url":"' + url + '"}'
    /* eslint-disable */
    wq.wqload.wqOpenUrl(callback || null, null, json)
    /* eslint-enable */
  },
  close: function (data) {
    /* eslint-disable */
    wq.wqload.wqClosePage(data || null)
    /* eslint-enable */
  }
}

export default WqCordova
