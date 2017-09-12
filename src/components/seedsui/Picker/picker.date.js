import Picker from './picker.js'
// 扩展Picker日期控件 (require pikcer.js)
var DatePicker = function (params) {
  // 参数改写
  var onDateClickDone = params.onClickDone
  var onDateScrollEnd = params.onScrollEnd
  params.onClickDone = undefined
  params.onScrollEnd = undefined
  var nowDate = new Date()
  /* ----------------------
  params
  ---------------------- */
  var defaults = {
    viewType: 'date', // 'date','month','time','datetime'
    isSimpleYear: false,

    yearClass: 'text-center',
    monthClass: 'text-center',
    dayClass: 'text-center',
    hourClass: 'text-center',
    minuteClass: 'text-center',

    yearsData: null,
    monthsData: null,
    daysData: null,
    hoursData: null,
    minutesData: null,

    defaultYear: '',
    defaultMonth: '',
    defaultDay: '',
    defaultHour: '',
    defaultMinute: '',

    minYear: nowDate.getFullYear() - 10, // 1950
    maxYear: nowDate.getFullYear() + 10, // 2050

    yyUnit: '年',
    MMUnit: '月',
    ddUnit: '日',
    hhUnit: '时',
    mmUnit: '分',

    onClickDone: function (e) {
      e.activeText = getActiveText(e.activeOptions)
      setDefaults(e.activeOptions)
      if (onDateClickDone) onDateClickDone(e)
    },
    onScrollEnd: function (e) {
      // 根据月份算日
      if ((e.params.viewType === 'date' || e.params.viewType === 'datetime') && (e.activeSlot.index === 0 || e.activeSlot.index === 1)) {
        var year = e.activeOptions[0]['key']
        var month = e.activeOptions[1]['key']
        var defaultDay = e.activeOptions[2]['key']
        updateDays(year, month, defaultDay) // 更新总天数
      }
      // 回调
      if (onDateScrollEnd) onDateScrollEnd(e)
    }
  }
  params = params || {}
  for (var def in defaults) {
    if (params[def] === undefined) {
      params[def] = defaults[def]
    }
  }
  var s = new Picker(params)
  /* ----------------------
  Model
  ---------------------- */
  function trim (str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  }
  // 设置默认值
  s.setDefaultYear = function (yearKey) {
    s.params.defaultYear = trim('' + yearKey)
  }
  s.setDefaultMonth = function (monthKey) {
    s.params.defaultMonth = trim('' + monthKey)
  }
  s.setDefaultDay = function (dayKey) {
    s.params.defaultDay = trim('' + dayKey)
  }
  s.setDefaultHour = function (hourKey) {
    s.params.defaultHour = trim('' + hourKey)
  }
  s.setDefaultMinute = function (minuteKey) {
    s.params.defaultMinute = trim('' + minuteKey)
  }

  // 默认时间
  s.updateDetault = function () {
    nowDate = new Date()
    // 默认值
    if (!s.params.defaultYear) {
      var yyyy = nowDate.getFullYear()
      var _yyyy = '' + yyyy
      s.setDefaultYear(_yyyy)
    }
    if (!s.params.defaultMonth) {
      var MM = nowDate.getMonth() + 1
      var _MM = MM.toString().length === 1 ? '0' + MM : MM
      s.setDefaultMonth(_MM)
    }
    if (!s.params.defaultDay) {
      var dd = nowDate.getDate()
      var _dd = dd.toString().length === 1 ? '0' + dd : dd
      s.setDefaultDay(_dd)
    }
    if (!s.params.defaultHour) {
      var hh = nowDate.getHours()
      var _hh = hh.toString().length === 1 ? '0' + hh : hh
      s.setDefaultHour(_hh)
    }
    if (!s.params.defaultMinute) {
      var mm = nowDate.getMinutes()
      var _mm = mm.toString().length === 1 ? '0' + mm : mm
      s.setDefaultMinute(_mm)
    }
  }
  s.updateDetault()

  // 年
  s.years = []
  if (s.params.yearsData) {
    s.years = s.params.yearsData
  } else {
    for (var yyyy = s.params.minYear; yyyy <= s.params.maxYear; yyyy++) {
      s.years.push({
        'key': '' + yyyy,
        'value': s.params.isSimpleYear ? yyyy.toString().substring(2, 4) + s.params.yyUnit : yyyy + s.params.yyUnit
      })
    }
  }
  // 月
  s.months = []
  if (s.params.monthsData) {
    s.months = s.params.monthsData
  } else {
    for (var MM = 1; MM <= 12; MM++) {
      var _MM = MM.toString().length === 1 ? '0' + MM : MM
      s.months.push({
        'key': '' + _MM,
        'value': _MM + s.params.MMUnit
      })
    }
  }
  // 日
  s.days = []
  var currentMaxday = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0).getDate()
  if (s.params.daysData) {
    s.days = Object.clone(s.params.daysData)
  } else {
    for (var dd = 1; dd <= currentMaxday; dd++) {
      var _dd = dd.toString().length === 1 ? '0' + dd : dd
      s.days.push({
        'key': '' + _dd,
        'value': _dd + s.params.ddUnit
      })
    }
  }

  function updateDaysForDefault (year, month) {
    var lastDay = '' + new Date(year, month, 0).getDate()
    var currentLastDay = s.days[s.days.length - 1]['key']
    if (lastDay === currentLastDay) return
    if (lastDay > currentLastDay) {
      for (var i = 1 + parseInt(currentLastDay); i <= lastDay; i++) {
        s.days.push({
          'key': '' + i,
          'value': '' + i + s.params.ddUnit
        })
      }
    } else if (lastDay < currentLastDay) {
      var spliceCount = currentLastDay - lastDay
      s.days.splice(s.days.length - spliceCount, spliceCount)
    }
  }
  function updateDaysForCustom (year, month) {
    var lastDay = '' + new Date(year, month, 0).getDate()
    var currentLastDay = s.days[s.days.length - 1]['key']
    var customData = s.params.daysData
    if (lastDay === currentLastDay) return
    if (lastDay > currentLastDay) {
      customData.forEach(function (n) {
        if (n['key'] <= lastDay && n['key'] > currentLastDay) s.days.push(n)
      })
    } else if (lastDay < currentLastDay) {
      for (var j = currentLastDay; j > lastDay; j--) {
        s.days.forEach(function (n) {
          if (n['key'] === '' + j) s.days.pop()
        })
      }
    }
  }
  function updateDays (year, month, defaultDay) {
    if (s.params.daysData) {
      updateDaysForCustom(year, month)
    } else {
      updateDaysForDefault(year, month)
    }
    var defaultKey = defaultDay
    if (s.days.length < defaultDay) defaultKey = s.days[s.days.length - 1]['key']
    s.replaceSlot(2, s.days, defaultKey, s.params.dayClass) // 修改第三项
  }

  // 时
  s.hours = []
  if (s.params.hoursData) {
    s.hours = s.params.hoursData
  } else {
    for (var hh = 0; hh <= 23; hh++) {
      var _hh = hh.toString().length === 1 ? '0' + hh : hh
      s.hours.push({
        'key': '' + _hh,
        'value': _hh + s.params.hhUnit
      })
    }
  }

  // 分
  s.minutes = []
  if (s.params.minutesData) {
    s.minutes = s.params.minutesData
  } else {
    for (var mm = 0; mm <= 59; mm++) {
      var _mm = mm.toString().length === 1 ? '0' + mm : mm
      s.minutes.push({
        'key': '' + _mm,
        'value': _mm + s.params.mmUnit
      })
    }
  }

  /* ----------------------
  Method
  ---------------------- */
  function getActiveText (activeData) {
    var activeKeys = activeData.map(function (n, i, a) {
      return n['key']
    })
    if (s.params.viewType === 'date') return activeKeys[0] + '-' + activeKeys[1] + '-' + activeKeys[2]
    else if (s.params.viewType === 'datetime') return activeKeys[0] + '-' + activeKeys[1] + '-' + activeKeys[2] + ' ' + activeKeys[3] + ':' + activeKeys[4]
    else if (s.params.viewType === 'time') return activeKeys[0] + ':' + activeKeys[1]
    else if (s.params.viewType === 'month') return activeKeys[0] + '-' + activeKeys[1]
  }

  function setDefaults (activeData) {
    var activeKeys = activeData.map(function (n, i, a) {
      return n['key']
    })
    if (s.params.viewType === 'date' || s.params.viewType === 'datetime' || s.params.viewType === 'month') {
      if (activeKeys[0]) s.setDefaultYear(activeKeys[0])
      if (activeKeys[1]) s.setDefaultMonth(activeKeys[1])
      if (activeKeys[2]) s.setDefaultDay(activeKeys[2])
      if (activeKeys[3]) s.setDefaultHour(activeKeys[3])
      if (activeKeys[4]) s.setDefaultMinute(activeKeys[4])
    } else if (s.params.viewType === 'time') {
      if (activeKeys[0]) s.setDefaultHour(activeKeys[0])
      if (activeKeys[1]) s.setDefaultMinute(activeKeys[1])
    }
  }
  /* ----------------------
  Init
  ---------------------- */
  // 添加数据
  function addMonthSlot () {
    s.addSlot(s.years, s.params.defaultYear, s.params.yearClass)
    s.addSlot(s.months, s.params.defaultMonth, s.params.monthClass)
  }

  function addDateSlot () {
    addMonthSlot()
    s.addSlot(s.days, s.params.defaultDay, s.params.dayClass)
  }

  function addTimeSlot () {
    s.addSlot(s.hours, s.params.defaultHour, s.params.hourClass)
    s.addSlot(s.minutes, s.params.defaultMinute, s.params.minuteClass)
  }

  function addDateTime () {
    addDateSlot()
    addTimeSlot()
  }

  function initSlots () {
    switch (s.params.viewType) {
      case 'date':
        addDateSlot()
        break
      case 'month':
        addMonthSlot()
        break
      case 'time':
        addTimeSlot()
        break
      case 'datetime':
        addDateTime()
        break
    }
  }
  s.update = function () {
    s.clearSlots()
    initSlots()
  }
  initSlots()
  return s
}

export default DatePicker
