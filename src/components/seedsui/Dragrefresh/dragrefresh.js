// Dragrefresh 下拉刷新
var Dragrefresh = function (params) {
  /* ----------------------
  Model
  ---------------------- */
  var defaults = {
    overflowContainer: document.body,
    baseline: 0, // 起始位置
    threshold: 100, // 触发位置
    duration: 150,

    topContainer: null,
    bottomContainer: null

    /* callbacks
    onPull:function(Dragrefresh)// 头部拖动中
    onShowTop:function(Dragrefresh)// 开始显示头部
    onHideTop:function(Dragrefresh)// 开始隐藏头部
    onTopShowed(Dragrefresh)// 头部显示动画结束
    onTopHid(Dragrefresh)// 头部隐藏动画结束

    onTopRefresh:function(Dragrefresh)// 头部刷新
    onTopComplete:function(data)// 头部完成加载
    onTopNoData:function(data)// 头部无数据 (废弃)

    onBottomRefresh:function(Dragrefresh)// 底部刷新
    onBottomComplete:function(data)// 底部完成加载
    onNoData:function(data)// 底部无数据

    onTransitionEnd:function(Dragrefresh)// 头部动画结束
     */
  }
  params = params || {}
  for (var def in defaults) {
    if (params[def] === undefined) {
      params[def] = defaults[def]
    }
  }
  var s = this
  s.params = params
  // Container
  s.overflowContainer = typeof s.params.overflowContainer === 'string' ? document.querySelector(s.params.overflowContainer) : s.params.overflowContainer
  if (!s.overflowContainer) {
    console.log('SeedsUI Error : Dragrefresh overflowContainer不存在，请检查页面中是否有此元素')
    return
  }
  // topContainer
  s.topContainer = typeof s.params.topContainer === 'string' ? document.querySelector(s.params.topContainer) : s.params.topContainer
  if (!s.topContainer) {
    console.log('SeedsUI Warn : topContainer不存在，请检查页面中是否有此元素')
  }
  // bottomContainer
  s.bottomContainer = typeof s.params.bottomContainer === 'string' ? document.querySelector(s.params.bottomContainer) : s.params.bottomContainer
  if (!s.bottomContainer) {
    console.log('SeedsUI Warn : bottomContainer不存在，请检查页面中是否有此元素')
  }
  // 正在刷新(默认为不允许下拉，当发生一次请求调用setPagination后才允许下拉)
  s.isRefreshed = false
  /* ----------------------
  Method
  ---------------------- */
  s.isHid = false
  // 隐藏
  s.hideTop = function () {
    s.topContainer.style.webkitTransitionDuration = s.params.duration + 'ms'
    s.touches.posY = s.params.baseline
    s.touches.currentPosY = s.params.baseline
    s.isHid = true
    // 拖动完成
    s.isOnPull = false
    // 实体操作
    if (s.params.onHideTop) s.params.onHideTop(s)
  }
  // 显示
  s.showTop = function () {
    s.topContainer.style.webkitTransitionDuration = s.params.duration + 'ms'
    s.touches.posY = s.params.threshold
    s.touches.currentPosY = s.params.baseline
    s.isHid = false
    // 实体操作
    if (s.params.onShowTop) s.params.onShowTop(s)
  }
  // 销毁对象
  s.destroyTop = function () {
    s.overflowContainer.removeChild(s.topContainer)
  }
  s.destroyBottom = function () {
    s.overflowContainer.removeChild(s.bottomContainer)
  }
  s.destroy = function () {
    s.destroyTop()
    s.destroyBottom()
    // 销毁事件
    s.detach()
  }
  // 是否有滚动条
  s.hasScroll = function () {
    var clientHeight = s.overflowContainer.clientHeight || window.innerHeight
    var scrollHeight = s.overflowContainer.scrollHeight || document.body.scrollHeight
    /* var scrollTop = s.overflowContainer.scrollTop || document.body.scrollTop
    console.log(clientHeight + ':' + scrollHeight + ':' + scrollTop) */

    if (clientHeight === scrollHeight) {
      return false
    }
    return true
  }
  // 头部刷新
  s.topRefresh = function () {
    if (!s.isRefreshed) return
    // 正在刷新
    s.isRefreshed = false
    // CallBack onTopRefresh
    if (s.params.onTopRefresh) s.params.onTopRefresh(s)
  }
  // 底部刷新
  s.bottomRefresh = function () {
    // 底部无数据、底部正在刷新、下拉中、头部刷新的情况，不执行
    if (s.isNoData || !s.isRefreshed || s.isOnPull) return
    // 正在刷新
    s.isRefreshed = false
    // CallBack onBottomRefresh
    if (s.params.onBottomRefresh) s.params.onBottomRefresh(s)
  }
  // 头部刷新完成
  s.topComplete = function () {
    if (!s.topContainer) return
    // 收起
    s.hideTop()
    // 刷新完成
    s.isRefreshed = true
    // Callback onTopComplete
    if (s.params.onTopComplete) s.params.onTopComplete(s)
    // Callback onNoData (无更多数据)
    if (s.isNoData) {
      if (s.params.onNoData) s.params.onNoData(s)
      return
    }
    // 如果还有数据，如果没有滚动条，则继续加载
    if (!s.bottomContainer) return
    if (!s.isNoData && !s.hasScroll()) {
      s.bottomRefresh()
    }
  }
  // 底部刷新完成
  s.bottomComplete = function () {
    if (!s.bottomContainer) return
    // 刷新完成
    s.isRefreshed = true
    // Callback onBottomComplete
    if (s.params.onBottomComplete) s.params.onBottomComplete(s)
    // Callback onNoData (无更多数据)
    if (s.isNoData) {
      if (s.params.onNoData) s.params.onNoData(s)
      return
    }
    // 如果还有数据，并且如果没有滚动条，则继续加载
    if (!s.hasScroll()) {
      s.bottomRefresh()
    }
  }
  s.noData = function () {
    s.isNoData = true
    s.isRefreshed = true
    // 收起头部
    s.hideTop()
    // 底部显示无数据
    if (s.params.onNoData) s.params.onNoData(s)
  }
  s.setPagination = function (isNext, isNoData) { // 下一页 | 总数 | 请求得到的数据
    s.isNoData = isNoData
    // 如果已经没有数据,并且是下一页则不加载
    if (s.isNoData && isNext) {
      s.noData()
      return
    }
    // 加载数据
    if (!isNext && s.topContainer) { // 第一页
      s.topComplete()
    } else { // 下一页
      s.bottomComplete()
    }
  }
  /* ----------------------
  Events
  ---------------------- */
  s.events = function (detach) {
    var action = detach ? 'removeEventListener' : 'addEventListener'
    var touchTarget = s.overflowContainer
    if (s.topContainer) {
      s.overflowContainer[action]('touchstart', s.onTouchStart, false)
      s.overflowContainer[action]('touchmove', s.onTouchMove, false)
      s.overflowContainer[action]('touchend', s.onTouchEnd, false)
      s.overflowContainer[action]('touchcancel', s.onTouchEnd, false)
      // 头部动画监听
      s.topContainer[action]('webkitTransitionEnd', s.onTransitionEnd, false)
    }
    if (s.bottomContainer) {
      // 绑定底部事件，区分一般容器和body
      if (touchTarget === document.body) {
        touchTarget = window
      }
      touchTarget[action]('scroll', s.onScroll, false)
    }
  }
  // attach、detach事件
  s.attach = function () {
    s.events()
  }
  s.detach = function () {
    s.events(true)
  }

  // Touch信息
  s.touches = {
    direction: 0,
    vertical: 0,
    isTop: true,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    endX: 0,
    endY: 0,
    diffX: 0,
    diffY: 0,
    posY: 0,
    currentPosY: 0
  }
  s.preventDefault = function (e) {
    e.preventDefault()
  }
  s.onTouchStart = function (e) {
    s.overflowContainer.addEventListener('touchmove', s.preventDefault, false)
    // 如果不在顶部，则不触发
    if (s.overflowContainer.scrollTop > 0) s.touches.isTop = false
    else s.touches.isTop = true

    s.topContainer.style.webkitTransitionDuration = '0ms'

    s.touches.startX = e.touches[0].clientX
    s.touches.startY = e.touches[0].clientY
  }
  // 标识头部正在拖动
  s.isOnPull = false
  s.onTouchMove = function (e) {
    s.touches.currentX = e.touches[0].clientX
    s.touches.currentY = e.touches[0].clientY
    s.touches.diffY = s.touches.currentY - s.touches.startY
    s.touches.diffX = s.touches.startX - s.touches.currentX

    // 设置滑动方向(-1上下 | 1左右)
    if (s.touches.direction === 0) {
      s.touches.direction = Math.abs(s.touches.diffX) > Math.abs(s.touches.diffY) ? 1 : -1
    }
    // 设置垂直方向(-1上 | 1下)
    if (s.touches.direction === -1) {
      s.touches.vertical = s.touches.diffY < 0 ? 1 : -1
    }
    // 在顶部下拉
    if (s.touches.isTop && s.touches.vertical === -1) {
      if (!s.isRefreshed) return
      s.overflowContainer.addEventListener('touchmove', s.preventDefault, false)
      s.touches.currentPosY = s.touches.posY + s.touches.diffY
      // 实体操作
      if (s.params.onPull) s.params.onPull(s)
      // 标识头部正在拖动
      s.isOnPull = true
    } else {
      s.overflowContainer.removeEventListener('touchmove', s.preventDefault, false)
    }
  }
  s.onTouchEnd = function (e) {
    // 清除move时记录的方向
    s.touches.direction = 0
    s.touches.vertical = 0
    // 下拉的情况
    if (s.touches.currentPosY > 0) {
      if (s.touches.currentPosY > s.params.threshold) { // 如果大于hold值，则展示
        s.showTop()
      } else { // 小于则收起
        s.hideTop()
      }
    }
  }
  s.onTransitionEnd = function (e) {
    if (e.target !== s.topContainer || e.propertyName === 'visibility') return
    // 有效的显示状态
    if (s.touches.posY === s.params.threshold && s.isRefreshed) {
      s.topRefresh()
    }

    // 显示与隐藏的回调
    // Callback onTransitionEnd
    if (s.params.onTransitionEnd) s.params.onTransitionEnd(s)
    if (s.isHid) {
      // Callback onTopHid
      if (s.params.onTopHid) s.params.onTopHid(s)
    } else {
      // Callback onTopShowed
      if (s.params.onTopShowed) s.params.onTopShowed(s)
    }
  }
  s.isNoData = false
  s.onScroll = function (e) {
    var clientHeight = this.clientHeight || window.innerHeight
    var scrollHeight = this.scrollHeight || document.body.scrollHeight
    var scrollTop = this.scrollTop || document.body.scrollTop

    if (scrollTop + clientHeight >= scrollHeight - 2) {
      s.bottomRefresh()
    }
  }
  // 主函数
  s.init = function () {
    s.attach()
  }

  s.init()
}

export default Dragrefresh
