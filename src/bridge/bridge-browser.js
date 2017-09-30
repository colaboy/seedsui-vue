var Browser = {
  /* -------------------
  打开关闭窗口
  ------------------- */
  open: function (url) {
    location.href = url
  },
  onBack: function (callback) {
    callback && callback()
  }
}

export default Browser
