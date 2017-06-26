var utils = {
  buildParams (data) {
    let i
    let params = ''
    for (i in data) {
      if (data.hasOwnProperty(i)) {
        params += '&' + i + '=' + data[i]
      }
    }
    return params.slice(1)
  },
  storage: {
    set (key, value) {
      window.localStorage.setItem(key, JSON.stringify(value))
    },
    get (key) {
      return JSON.parse(window.localStorage.getItem(key))
    }
  },
  debounce (func, wait, immediate) {
    var timeout, args, context, timestamp, result
    var later = function () {
      var last = Date.now() - timestamp
      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last)
      } else {
        timeout = null
        if (!immediate) {
          result = func.apply(context, args)
          if (!timeout) context = args = null
        }
      }
    }
    return function () {
      context = this
      args = arguments
      timestamp = Date.now()
      var callNow = immediate && !timeout
      if (!timeout) timeout = setTimeout(later, wait)
      if (callNow) {
        result = func.apply(context, args)
        context = args = null
      }
      return result
    }
  },
  mixin (obj1, obj2) {
    var obj = JSON.parse(JSON.stringify(obj1))
    var i
    for (i in obj2) {
      if (obj2.hasOwnProperty(i)) {
        obj[i] = obj2[i]
      }
    }
    return obj
  },
  getParameterByName: function (name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
    var results = regex.exec(window.location.search)
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
  },
  getRequest: function (param) {
    var oRegex = new RegExp('[?&]' + param + '=([^&]+)', 'i')
    var oMatch = oRegex.exec(window.location.search)
    if (oMatch && oMatch.length > 1) {
      return oMatch[1]
    } else {
      return ''
    }
  },
  generateUUID: function () {
    var d = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
  }
}

export default utils
