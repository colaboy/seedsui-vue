const env = process.env.NODE_ENV

var urls = {
  rewardsList: '/mockjs/62/biz/std_mendian/task/client/v1/queryTasks.action'
}

if (env === 'development') {
  const host = 'http://172.31.2.63:9999'

  for (var i in urls) {
    if (urls.hasOwnProperty(i)) {
      urls[i] = host + urls[i]
    }
  }
}

export default urls
