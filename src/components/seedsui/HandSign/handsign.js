var HandSign = function (container, params) {
  /* ----------------------
  Model
  ---------------------- */
  var defaults = {
    color: '#000',
    lineWidth: '1',

    imgSrc: '',
    imgPostion: 'bottom right', // left center right top middle bottom
    imgWidth: null,
    imgHeight: null,

    fontSize: '15px',
    fontFamily: 'microsoft yahei',
    fontStyle: 'rgba(0, 0, 0, 1)',
    fontText: '',
    fontPostion: 'bottom center',

    suffix: 'image/png',
    quality: 0.92
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
  if (!s.container) {
    console.log('SeedsUI Error : HandSign container不存在，请检查页面中是否有此元素')
    return
  }
  s.width = s.container.width
  s.height = s.container.height
  s.ctx = s.container.getContext('2d')
  s.stage_info = s.container.getBoundingClientRect()
  s.path = {
    beginX: 0,
    beginY: 0,
    endX: 0,
    endY: 0
  }
  /* ----------------------
  Events
  ---------------------- */
  s.preventDefault = function (e) {
    e.preventDefault()
  }
  s.events = function (detach) {
    var action = detach ? 'removeEventListener' : 'addEventListener'
    s.container[action]('touchstart', s.onTouchStart, false)
    s.container[action]('touchend', s.onTouchEnd, false)
    s.container[action]('touchcancel', s.onTouchEnd, false)
  }
  // attach、detach事件
  s.attach = function () {
    s.events()
  }
  s.detach = function () {
    s.events(true)
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
  // 签名
  s.drawBegin = function (e) {
    var that = this
    window.getSelection()
      ? window.getSelection().removeAllRanges()
      : document.selection.empty()
    s.ctx.strokeStyle = s.params.color
    s.ctx.lineWidth = s.params.lineWidth
    s.ctx.beginPath()
    s.ctx.moveTo(
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
    s.ctx.lineTo(
      e.changedTouches[0].clientX - s.stage_info.left,
      e.changedTouches[0].clientY - s.stage_info.top
    )
    s.path.endX = e.changedTouches[0].clientX - s.stage_info.left
    s.path.endY = e.changedTouches[0].clientY - s.stage_info.top
    s.ctx.stroke()
  }
  s.drawEnd = function () {
    document.removeEventListener('touchstart', s.preventDefault, false)
    document.removeEventListener('touchend', s.preventDefault, false)
    document.removeEventListener('touchmove', s.preventDefault, false)
    // canvas.ontouchmove = canvas.ontouchend = null
  }
  s.clear = function () {
    s.ctx.clearRect(0, 0, s.width, s.height)
    if (s.params.imgSrc) s.drawImg()
  }
  s.save = function () {
    return s.container.toDataURL(s.params.suffix, s.params.quality)
  }
  s.calcPostion = function (w, h, pos) {
    var posArr = pos.split(' ').map(function (item, index){
      var x = 0
      var y = 0
      // 如果是数字
      if (!isNaN(item)) {
        if (index === 0) return {x: item}
        if (index === 1) return {y: item}
      }
      // 如果是字符串
      if (item === 'top') return {y: 0}
      if (item === 'left') return {x: 0}
      if (item === 'right') {
        x = s.width < w ? 0 : s.width - w
        return {x: x}
      }
      if (item === 'bottom') {
        y = s.height < h ? 0 : s.height - h
        return {y: y}
      }
      if (item === 'center') {
        x = (s.width - w) / 2
        return {x: x}
      }
      if (item === 'middle') {
        y = (s.height - h) / 2
        return {y: y}
      }
    })
    var posJson = {
      x: 0,
      y: 0
    }
    posArr.forEach(function (item) {
      if (item.x) {
        posJson.x = item.x
      } else if (item.y) {
        posJson.y = item.y
      }
    })
    return {
      x: posJson.x || 0,
      y: posJson.y || 0
    }
  }
  // 图片
  s.drawImg = function () {
    var img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = s.params.imgSrc
    img.onload = function () {
      var sx = 0 // 剪切的 x 坐标
      var sy = 0 // 剪切的 y 坐标
      var width = s.params.imgWidth ? s.params.imgWidth : img.width // 使用的图像宽度
      var height = s.params.imgHeight ? s.params.imgHeight : img.height // 使用的图像高度
      var swidth = img.width // 剪切图像的宽度
      var sheight = img.height // 剪切图像的高度
      var pos = s.calcPostion(width, height, s.params.imgPostion) // 画布上放置xy坐标
      s.ctx.drawImage(img, sx, sy, swidth, sheight, pos.x, pos.y, width, height)
      // 绘制文字
      if (s.params.fontText) s.drawFont()
    }
  }
  // 文字
  s.drawFont = function () {
    var match = s.params.fontSize.match(/(0|([1-9][0-9]*))(\.[0-9]+)?/)
    var height = match[0]
    var width = s.params.fontText.length * height
    var pos = s.calcPostion(width, height, s.params.fontPostion) // 画布上放置xy坐标
    console.log(pos);
    // 写字
    s.ctx.font = s.params.fontSize + ' ' + s.params.fontFamily
    s.ctx.fillStyle = s.params.fontStyle
    s.ctx.fillText(s.params.fontText, pos.x, pos.y + (height - 5))
  }
  // 主函数
  s.init = function () {
    s.attach()
    if (s.params.imgSrc) s.drawImg()
  }

  s.init()
}

export default HandSign
