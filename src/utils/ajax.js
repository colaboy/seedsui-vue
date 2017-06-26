import utils from './index.js'

var xhr = (config) => {
  let xhr = new window.XMLHttpRequest()
  let url = config.url
  let data = config.data || {}
  let success = config.success
  let error = config.error
  let params = utils.buildParams(data)
  let type = config.type || 'GET'
  let contentType = config.contentType
  let extra = config.extra

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let res = JSON.parse(xhr.responseText)
        success(res, extra)
      } else {
        error && error()
      }
    }
  }

  if (type === 'POST') {
    xhr.open(type, url, true)
    xhr.setRequestHeader('Content-type', contentType || 'application/json')
    if (contentType === 'application/x-www-form-urlencoded; charset=UTF-8') {
      xhr.send(params)
    } else {
      xhr.send(JSON.stringify(data))
    }
  } else {
    if (url.indexOf('?') === -1) {
      url += '?' + params
    } else {
      url += '&' + params
    }
    xhr.open(type, url, true)
    xhr.send(null)
  }
}

export default { xhr }
