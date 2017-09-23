var Browser = {
  /* -------------------
  打开关闭窗口
  ------------------- */
  open: function (url) {
    location.href = url
  },
  close: function (url) {
    history.go(-1)
  }
}

export default Browser
