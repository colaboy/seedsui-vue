// Calendar 日历 (require calendarutil.js)
import CalendarUtil from '@/utils/calendarutil.js'
var Calendar = function (container, params) {
  /* --------------------
  Model
  -------------------- */
  var defaults = {
    viewType: 'month', // 值为month|week
    defaultActiveDate: new Date(),
    disableBeforeDate: null,
    disableAfterDate: null,
    activeDate: null,
    threshold: '50',
    duration: '300',
    dayHeight: '40',
    isYTouch: true, // 是否允许上下滑动
    showTitleWeeks: false, // 是否显示周数
    showTitleWeek: false, // 是否显示周几
    // DOM
    calendarClass: 'calendar',
    disableClass: 'calendar-disable',

    headerClass: 'calendar-header',
    titleClass: 'calendar-title',
    prevClass: 'calendar-prev',
    nextClass: 'calendar-next',
    prevHTML: '&lt',
    nextHTML: '&gt',

    weeksClass: 'calendar-weeks',
    weekClass: 'calendar-week',

    wrapperClass: 'calendar-wrapper',
    wrapperXClass: 'calendar-wrapper-x',
    wrapperYClass: 'calendar-wrapper-y',
    monthClass: 'calendar-month',
    monthRowClass: 'calendar-monthrow',
    dayClass: 'calendar-day',
    dayNumClass: 'calendar-daynum',

    // 状态
    currentClass: 'calendar-current',
    notcurrentClass: 'calendar-notcurrent',
    todayClass: 'calendar-today',
    activeClass: 'calendar-active'

    /*
    Callbacks:
    onClick:function(Calendar)
    onChange:function(Calendar)
    onHeightChange:function(Calendar)// 高度变化
    onTransitionEnd:function(Calendar)// 动画结束
    onHorizontalTransitionEnd:function(Calendar)// 横滑动画结束
    onVerticalTransitionEnd:function(Calendar)// 竖滑动画结束
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
  s.params.wrapperHeight = s.params.dayHeight * 6
  // 禁止修改默认值
  Object.defineProperty(s.params, 'defaultActiveDate', {
    enumerable: true,
    configurable: true,
    writable: false
  })

  // 今天和选中天
  s.today = new Date()
  s.activeDate = null
  // 日历工具箱
  if (s.params.activeDate) { // 如果有选中天，则初始化为选中天
    s.activeDate = s.params.activeDate
    s.calendarUtil = new CalendarUtil(s.activeDate)
  } else { // 否则，则初始化为默认天
    s.calendarUtil = new CalendarUtil(s.params.defaultActiveDate)
  }
  // Container
  s.container = typeof container === 'string' ? document.querySelector(container) : container
  if (!s.container) {
    console.log('SeedsUI Error：未找到Calendar的DOM对象，请检查传入参数是否正确')
    return
  }
  s.container.width = s.container.clientWidth
  if (!s.container.width) s.container.width = window.innerWidth || document.documentElement.clientWidth
  // Header
  s.header
  s.title
  s.prev
  s.next
  // Week
  s.weekContainer
  s.weeks = []
  // Wrapper
  s.wrapper
  s.wrapperX
  s.wrapperY
  s.months = new Array(3)
  s.days = []
  // Touch信息
  s.touches = {
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    endX: 0,
    endY: 0,
    diffX: 0,
    diffY: 0,
    posX: 0,
    posY: 0,
    maxPosY: s.params.wrapperHeight - s.params.dayHeight,
    h: s.params.wrapperHeight,
    direction: 0,
    horizontal: 0,
    vertical: 0
  }
  // Header
  s.createHeader = function () {
    var header = document.createElement('div')
    header.setAttribute('class', s.params.headerClass)
    return header
  }
  s.createPrev = function () {
    var prev = document.createElement('div')
    prev.setAttribute('class', s.params.prevClass)
    prev.innerHTML = s.params.prevHTML
    return prev
  }
  s.createNext = function () {
    var next = document.createElement('div')
    next.setAttribute('class', s.params.nextClass)
    next.innerHTML = s.params.nextHTML
    return next
  }
  s.createTitle = function () {
    var title = document.createElement('div')
    title.setAttribute('class', s.params.titleClass)
    return title
  }
  // WeekContainer
  s.createWeekContainer = function () {
    var weekContainer = document.createElement('div')
    weekContainer.setAttribute('class', s.params.weeksClass)

    var weekNames = ['日', '一', '二', '三', '四', '五', '六']
    /* eslint-disable */
    for (var i = 0, weekName; weekName = weekNames[i++];) {
      var week = document.createElement('div')
      week.setAttribute('class', s.params.weekClass)
      week.innerHTML = weekName
      weekContainer.appendChild(week)
      s.weeks.push(week)
    }
    /* eslint-enable */

    return weekContainer
  }
  // Wrapper
  s.createWrapper = function () {
    var wrapper = document.createElement('div')
    wrapper.setAttribute('class', s.params.wrapperClass)
    return wrapper
  }
  s.createWrapperY = function () {
    var wrapperY = document.createElement('div')
    wrapperY.setAttribute('class', s.params.wrapperYClass)
    return wrapperY
  }
  s.createWrapperX = function () {
    var wrapperX = document.createElement('div')
    wrapperX.setAttribute('class', s.params.wrapperXClass)
    wrapperX.width = s.container.width * 3
    wrapperX.style.width = s.container.width * 3 + 'px'
    /*
    wrapperX.width=s.container.width*3
    wrapperX.style.width=wrapperX.width+'px'
    */
    for (var i = 0; i < 3; i++) {
      s.months[i] = document.createElement('div')
      s.months[i].setAttribute('class', s.params.monthClass)
      s.months[i].style.width = s.container.width + 'px'
      wrapperX.appendChild(s.months[i])
    }
    return wrapperX
  }
  s.createDays = function () {
    for (var i = 0; i < 3; i++) { // 注入到月
      for (var j = 0; j < 6; j++) { // 注入行
        var monthRow = document.createElement('div')
        monthRow.setAttribute('class', s.params.monthRowClass)

        for (var k = 0; k < 7; k++) { // 注入到星期
          var day = document.createElement('div')
          day.setAttribute('class', s.params.dayClass)
          day.style.height = s.params.dayHeight + 'px'
          day.style.lineHeight = s.params.dayHeight + 'px'
          var dayNum = document.createElement('div')
          dayNum.setAttribute('class', s.params.dayNumClass)

          day.appendChild(dayNum)
          monthRow.appendChild(day)

          s.days.push(dayNum)
        }
        s.months[i].appendChild(monthRow)
      }
    }
  }
  // 创建DOM
  s.create = function () {
    // 创建头部
    if (s.container.querySelector('.' + s.params.headerClass)) {
      s.header = s.container.querySelector('.' + s.params.headerClass)
      s.prev = s.container.querySelector('.' + s.params.prevClass)
      s.next = s.container.querySelector('.' + s.params.nextClass)
      s.title = s.container.querySelector('.' + s.params.titleClass)
    } else {
      s.header = s.createHeader()
      s.prev = s.createPrev()
      s.next = s.createNext()
      s.title = s.createTitle()

      s.header.appendChild(s.prev)
      s.header.appendChild(s.title)
      s.header.appendChild(s.next)
      s.container.appendChild(s.header)
    }
    // 创建周
    if (s.container.querySelector('.' + s.params.weeksClass)) {
      s.weekContainer = s.container.querySelector('.' + s.params.weeksClass)
    } else {
      s.weekContainer = s.createWeekContainer()

      s.container.appendChild(s.weekContainer)
    }
    // 创建主体
    s.wrapper = s.createWrapper()
    s.wrapperX = s.createWrapperX()
    s.wrapperY = s.createWrapperY()
    s.wrapperY.appendChild(s.wrapperX)
    s.wrapper.appendChild(s.wrapperY)
    s.container.appendChild(s.wrapper)
    s.createDays()
  }
  s.create()
  /* --------------------
  Method
  -------------------- */
  // 容器操作类
  s.addDuration = function () {
    s.wrapper.style.webkitTransitionDuration = s.params.duration + 'ms'
    s.wrapperY.style.webkitTransitionDuration = s.params.duration + 'ms'
    s.wrapperX.style.webkitTransitionDuration = s.params.duration + 'ms'
  }
  s.removeDuration = function () {
    s.wrapper.style.webkitTransitionDuration = '0ms'
    s.wrapperY.style.webkitTransitionDuration = '0ms'
    s.wrapperX.style.webkitTransitionDuration = '0ms'
  }
  s.updateTranslateX = function () {
    s.removeDuration()
    s.touches.posX = -s.container.width
    s.wrapperX.style.webkitTransform = 'translateX(' + s.touches.posX + 'px)'
  }
  s.updateContainerHeight = function () { // 更新高度
    if (s.params.viewType === 'month') { // 展开
      s.touches.h = s.params.wrapperHeight
    } else if (s.params.viewType === 'week') { // 收缩
      s.touches.h = s.params.dayHeight
    }
    s.wrapper.style.height = s.touches.h + 'px'
    s.wrapperY.style.webkitTransform = 'translateY(-' + s.touches.posY + 'px)'
  }
  s.updateContainerWidth = function () { // 更新宽度
    s.container.width = s.container.clientWidth
    s.wrapperX.width = s.container.width * 3 + 'px'
    /*
    s.wrapperX.width=s.container.width*3
    s.wrapperX.style.width=s.wrapperX.width.width+'px'
    */
    for (var i = 0; i < 3; i++) {
      s.months[i].style.width = s.container.width + 'px'
    }
  }
  s.updateContainerSize = function () {
    s.updateContainerHeight()
    s.updateContainerWidth()
    s.updateTranslateX()
  }
  s.updateClasses = function () {
    // 更新容器尺寸
    s.updateContainerHeight()
    // 位置还原
    s.updateTranslateX()
  }
  s.updateClasses()
  // 左右滑动
  s.slideXTo = function (index) {
    s.touches.posX = -s.container.width * index
    s.addDuration()
    s.wrapperX.style.webkitTransform = 'translateX(' + s.touches.posX + 'px)'
    // 刷新数据
    if (index === 0) { // 上一页
      if (s.params.viewType === 'month') {
        s.calendarUtil.activePrevMonth()
      } else if (s.params.viewType === 'week') {
        s.wrapperY.style.webkitTransitionDuration = '0ms'
        s.calendarUtil.activePrevWeek()
      }
    } else if (index === 2) { // 下一页
      if (s.params.viewType === 'month') {
        s.calendarUtil.activeNextMonth()
      } else if (s.params.viewType === 'week') {
        s.wrapperY.style.webkitTransitionDuration = '0ms'
        s.calendarUtil.activeNextWeek()
      }
    }
    /*
    // 滑动到禁用
    if((s.params.disableBeforeDate && s.calendarUtil.activeDate < s.params.disableBeforeDate)||(s.params.disableAfterDate && s.calendarUtil.activeDate > s.params.disableAfterDate)){
      s.calendarUtil.activeDate = s.activeDate
      return
    }
    */
    s.draw()
  }
  // 上下滑动
  s.dragY = function (heightY) {
    s.wrapper.style.height = heightY + 'px'
    var translateY = s.params.wrapperHeight - heightY
    if (translateY <= s.touches.maxPosY) {
      s.wrapperY.style.webkitTransform = 'translateY(-' + translateY + 'px)'
    }
  }
  s.slideYTo = function (index) {
    s.addDuration()
    if (index === 1) { // 展开
      s.params.viewType = 'month'
      s.touches.posY = 0
      s.draw(1)
    } else if (index === -1) { // 收缩
      s.params.viewType = 'week'
      s.touches.posY = s.touches.maxPosY
      s.draw(-1)
    } else {
      s.dragY(s.touches.h)
    }
  }
  // 绘制日历
  var today = new Date()
  s.isToday = function (date) {
    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) return true
    return false
  }
  s.data = []
  s.updateData = function () {
    s.data = s.calendarUtil.getCalendarData()
    s.data.activeIndex = s.calendarUtil.activeIndex
    var activeRowIndex = s.calendarUtil.activeRowIndex
    if (s.params.viewType === 'week') {
      s.touches.maxPosY = activeRowIndex * s.params.dayHeight
      s.touches.posY = s.touches.maxPosY
      var prevWeek = s.calendarUtil.getPrevWeek()
      var nextWeek = s.calendarUtil.getNextWeek()
      var start1 = activeRowIndex * 7
      var start2 = start1 + 84
      // 上周
      for (var i = 0, datIndex1 = start1; i < 7; i++) {
        s.data[datIndex1] = prevWeek[i]
        datIndex1++
      }
      // 下周
      for (var j = 0, datIndex2 = start2; j < 7; j++) {
        s.data[datIndex2] = nextWeek[j]
        datIndex2++
      }
    }
  }
  var chinaWeek = { 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 0: '日' }
  s.drawHeader = function (actDate) {
    var activeDate = actDate || s.calendarUtil.activeDate
    var activeDay = ''
    if (s.params.showTitleWeek) {
      activeDay = '&nbsp&nbsp周' + chinaWeek[activeDate.getDay()]
    }
    var activeWeeks = ''
    if (s.params.showTitleWeeks) {
      activeWeeks = '&nbsp&nbsp第' + s.calendarUtil.getWeeksNum(activeDate) + '周'
    }
    // 注入头部数据
    var year = activeDate.getFullYear()
    var month = (activeDate.getMonth() + 1)
    month = month < 10 ? '0' + month : month
    var date = activeDate.getDate()
    date = date < 10 ? '0' + date : date
    s.title.innerHTML = year + '-' + month + '-' + date + activeDay + activeWeeks
  }
  s.draw = function (vertical) { // vertical:上下拖动(-1上 | 1下 | 其它为非上下拖动)
    // 更新选中日期
    s.updateData()
    if (s.activeDate) s.activeDate = s.calendarUtil.activeDate
    // 注入身体
    var activeIndex = s.data.activeIndex
    // var activeRowIndex = s.data.activeRowIndex
    for (var i = 0; i < s.days.length; i++) {
      s.days[i].innerHTML = s.data[i].getDate()
      // index
      s.days[i].index = i
      // class
      s.days[i].className = s.params.dayNumClass
      // class-currentClass
      if (s.data[i].isCurrent) s.days[i].classList.add(s.params.currentClass)
      else s.days[i].classList.add(s.params.notcurrentClass)
      // class-todayClass
      if (s.isToday(s.data[i])) s.days[i].classList.add(s.params.todayClass)
      // class-activeClass
      if (i === activeIndex && s.activeDate) s.days[i].classList.add(s.params.activeClass)
      // 禁用日期
      if (s.params.disableBeforeDate && s.data[i].setHours(0, 0, 0, 0) < s.params.disableBeforeDate.setHours(0, 0, 0, 0)) {
        s.days[i].classList.add(s.params.disableClass)
      }
      if (s.params.disableAfterDate && s.data[i].setHours(0, 0, 0, 0) > s.params.disableAfterDate.setHours(0, 0, 0, 0)) {
        s.days[i].classList.add(s.params.disableClass)
      }
    }
    s.updateContainerHeight()
    // 滑动到禁用
    if ((s.params.disableBeforeDate && s.calendarUtil.activeDate < s.params.disableBeforeDate) || (s.params.disableAfterDate && s.calendarUtil.activeDate > s.params.disableAfterDate)) {
      console.log('SeedsUI Warn：滑动到禁用日期')
      return
    }
    // 注入头部
    s.drawHeader(s.activeDate)
    if (vertical) {
      s.vertical = vertical
      // Callback onHeightChange
      if (s.params.onHeightChange) s.params.onHeightChange(s)
    } else {
      // Callback onChange
      if (s.params.onChange) s.params.onChange(s)
    }
  }
  s.draw()
  s.activeDay = function (target) {
    for (var i = 0; i < s.days.length; i++) {
      s.days[i].classList.remove(s.params.activeClass)
    }
    // 选中日期
    s.activeDate = s.data[target.index]
    s.calendarUtil.setActiveDate(s.activeDate)
    // 重新绘制
    s.draw()
  }
  s.showMonth = function () {
    s.slideYTo(1)
  }
  s.showWeek = function () {
    s.slideYTo(-1)
  }
  s.showToday = function () {
    s.calendarUtil.setActiveDate(s.today)
    s.draw()
  }
  s.reset = function () {
    // 选中日期
    s.activeDate = s.params.activeDate
    s.calendarUtil.setActiveDate(s.params.defaultActiveDate)
    // 重新绘制
    s.draw()
  }
  /* --------------------
  Control
  -------------------- */
  s.events = function (detach) {
    var action = detach ? 'removeEventListener' : 'addEventListener'
    s.wrapper[action]('touchstart', s.onTouchStart, false)
    s.wrapper[action]('touchmove', s.onTouchMove, false)
    s.wrapper[action]('touchend', s.onTouchEnd, false)
    s.wrapper[action]('touchcancel', s.onTouchEnd, false)
    s.wrapper[action]('webkitTransitionEnd', s.onTransitionEnd, false)
    s.wrapper[action]('click', s.onClick, false)

    s.prev[action]('click', s.onClickPrev, false)
    s.next[action]('click', s.onClickNext, false)
  }
  // attach、dettach事件
  s.attach = function (event) {
    s.events()
  }
  s.detach = function (event) {
    s.events(true)
  }
  s.preventDefault = function (e) {
    e.preventDefault()
  }
  // Event Handler
  s.onClickPrev = function (e) {
    s.slideXTo(0)
  }
  s.onClickNext = function (e) {
    s.slideXTo(2)
  }
  s.onClick = function (e) {
    s.target = e.target
    // 点击禁用日期
    if (e.target.classList.contains(s.params.disableClass)) return
    // 点击日期
    s.removeDuration()
    if (e.target.classList.contains(s.params.dayNumClass)) {
      s.activeDay(e.target)
    }
    // Callback onClick
    if (s.params.onClick) s.params.onClick(s)
  }
  s.onTouchStart = function (e) {
    s.container.addEventListener('touchmove', s.preventDefault, false)
    s.touches.startX = e.touches[0].clientX
    s.touches.startY = e.touches[0].clientY
  }
  s.onTouchMove = function (e) {
    s.touches.currentX = e.touches[0].clientX
    s.touches.currentY = e.touches[0].clientY
    s.touches.diffX = s.touches.startX - s.touches.currentX
    s.touches.diffY = s.touches.startY - s.touches.currentY

    // 设置滑动方向(-1上下 | 1左右)
    if (s.touches.direction === 0) {
      s.touches.direction = Math.abs(s.touches.diffX) > Math.abs(s.touches.diffY) ? 1 : -1
    }

    if (s.touches.direction === 1) { // 左右滑动
      var moveX = s.touches.posX - s.touches.diffX
      if (moveX < 0 && Math.abs(moveX) < s.container.width * 2) { // 判断是否是边缘
        s.touches.horizontal = moveX < s.touches.posX ? 1 : -1// 设置方向(左右)
        s.wrapperX.style.webkitTransform = 'translateX(' + moveX + 'px)'
      }
    } else if (s.touches.direction === -1) { // 上下滑动
      if (s.params.isYTouch === true) { // 允许Y滑动的情况下
        var heightY = s.touches.h - s.touches.diffY
        if (heightY > s.params.dayHeight && heightY < s.params.wrapperHeight) { // 判断是否是边缘
          s.touches.vertical = heightY > s.touches.h ? 1 : -1// 设置方向(上下)
          s.dragY(heightY)
        }
      } else {
        s.container.removeEventListener('touchmove', s.preventDefault, false)
      }
    }
  }
  s.onTouchEnd = function (e) {
    if (s.touches.direction === 1) { // 左右滑动
      if (Math.abs(s.touches.diffX) < s.params.threshold) s.touches.horizontal = 0
      if (s.touches.horizontal === 1) s.slideXTo(2) // 下一页
      else if (s.touches.horizontal === -1) s.slideXTo(0)// 上一页
      else s.slideXTo(1)// 还原当前页
    } else if (s.touches.direction === -1) { // 上下滑动
      if (s.params.isYTouch === true) { // 允许Y滑动的情况下
        if (Math.abs(s.touches.diffY) < s.params.threshold) s.touches.vertical = 0
        if (s.touches.vertical === 1) s.slideYTo(1)// 展开
        else if (s.touches.vertical === -1) s.slideYTo(-1)// 收缩
        else s.slideYTo(0)// 还原当前页
      }
    }

    // 清空滑动方向
    s.touches.direction = 0
    s.touches.horizontal = 0
    s.touches.vertical = 0
  }
  s.onTransitionEnd = function (e) {
    s.target = e.target
    // 横向滑动时需要还原位置
    if (s.target.classList.contains(s.params.wrapperXClass)) {
      // 还原位置
      s.updateTranslateX()
      // Callback onHorizontalTransitionEnd
      if (s.params.onHorizontalTransitionEnd) s.params.onHorizontalTransitionEnd(s)
    }
    // 竖向滑动
    if (s.target.classList.contains(s.params.wrapperYClass)) {
      // Callback onVerticalTransitionEnd
      if (s.params.onVerticalTransitionEnd) s.params.onVerticalTransitionEnd(s)
    }
    // Callback onTransitionEnd
    if (s.params.onTransitionEnd) s.params.onTransitionEnd(s)
  }
  /* --------------------
  Init
  -------------------- */
  s.init = function () {
    s.attach()
  }
  s.init()
}

export default Calendar
