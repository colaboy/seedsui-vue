import ajax from './../utils/ajax.js'
import ob from './observer.js'

export function fetchData (url, req, type, contentType) {
  ob.$emit('ajaxLoading', true)
  let reqData = req || {}
  return new Promise((resolve, reject) => {
    ajax.xhr({
      url: url,
      data: reqData,
      type,
      contentType,
      success (data) {
        if (data.code === '1') {
          resolve(data)
        } else {
          reject(data)
        }
        ob.$emit('ajaxLoading', false)
      },
      error (err) {
        reject(err)
        ob.$emit('ajaxLoading', false)
      }
    })
  })
}
