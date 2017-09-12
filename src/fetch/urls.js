const env = process.env.NODE_ENV

var urls = {
  urlxx: '/xx/xx.action'
}

if (env === 'development') {
  const host = 'http://xxx.xx.x.xx:xxxx'

  for (var i in urls) {
    if (urls.hasOwnProperty(i)) {
      urls[i] = host + urls[i]
    }
  }
}

export default urls
