var BridgeBrowser = {
  /* -------------------
  打开关闭窗口
  ------------------- */
  openWindow: function (url) {
    location.href = url
  },
  closeWindow: function () {
    history.go(-1)
  },
  onBack: function (callback) {
    callback && callback()
  }
}

export default BridgeBrowser
