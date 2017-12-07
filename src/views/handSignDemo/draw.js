var Draw = function (container, params) {
  /* ----------------------
  Model
  ---------------------- */
  var defaults = {
    container: null
  }
  params = params || {}
  for (var def in defaults) {
    if (params[def] === undefined) {
      params[def] = defaults[def]
    }
  }
  var s = this
  s.params = params
  s.container = typeof container === 'string' ? document.querySelector(container) : container
  if (!s.overflowContainer) {
    console.log('SeedsUI Error : Draw container不存在，请检查页面中是否有此元素')
    return
  }
  s.cxt = s.container.getContext('2d')
  s.stage_info = s.container.getBoundingClientRect()
  s.path = {
    beginX: 0,
    beginY: 0,
    endX: 0,
    endY: 0
  }
  s.preventDefault = function (e) {
    e.preventDefault()
  }
  /* ----------------------
  Events
  ---------------------- */
  s.attach = function () {
    s.container.addEventListener('touchstart', s.onTouchStart, false)
    s.container.addEventListener('touchend', s.onTouchEnd, false)
    this.clear()
  }
  s.onTouchStart = function (e) {
    document.addEventListener('touchstart', s.preventDefault, false)
    s.drawBegin(e)
  }
  s.onTouchEnd = function (e) {
    document.addEventListener('touchend', s.preventDefault, false)
    s.drawEnd()
  }
  /* ----------------------
  Method
  ---------------------- */
  s.drawBegin = function (e) {
    var that = this
    window.getSelection()
      ? window.getSelection().removeAllRanges()
      : document.selection.empty()
    s.cxt.strokeStyle = '#000'
    s.cxt.beginPath()
    s.cxt.moveTo(
      e.changedTouches[0].clientX - s.stage_info.left,
      e.changedTouches[0].clientY - s.stage_info.top
    )
    s.path.beginX = e.changedTouches[0].clientX - s.stage_info.left
    s.path.beginY = e.changedTouches[0].clientY - s.stage_info.top
    s.container.addEventListener('touchmove', function () {
      that.drawing(event)
    })
  }
  s.drawing = function (e) {
    s.cxt.lineTo(
      e.changedTouches[0].clientX - s.stage_info.left,
      e.changedTouches[0].clientY - s.stage_info.top
    )
    s.path.endX = e.changedTouches[0].clientX - s.stage_info.left
    s.path.endY = e.changedTouches[0].clientY - s.stage_info.top
    s.cxt.stroke()
  }
  s.drawEnd = function () {
    document.removeEventListener('touchstart', s.preventDefault, false)
    document.removeEventListener('touchend', s.preventDefault, false)
    document.removeEventListener('touchmove', s.preventDefault, false)
    // canvas.ontouchmove = canvas.ontouchend = null
  }
  s.clear = function () {
    s.cxt.clearRect(0, 0, 300, 600)
  }
  s.save = function () {
    return s.container.toDataURL('image/png')
  }
  // 主函数
  s.init = function () {
    s.attach()
  }

  s.init()
}

export default Draw
