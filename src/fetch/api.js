import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

const env = process.env.NODE_ENV

if (env === 'development') {
  axios.defaults.baseURL = 'http://github.com:8080'
  // 测试时写死token
  // axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE1MDUxOTQ2NzYsInN1YiI6IntcImNsaWVudFR5cGVcIjpcImNsaWVudF9zdGFuZGFyXCIsXCJjcmVhdGVUaW1lXCI6MTUwNTE5NDY3NjU3MyxcImxvZ2luVHlwZVwiOlwiU09VUkNFX1RZUEVfQ0xJRU5UXCIsXCJyZWFsUmVmcmVzaFRva2VuRXhwaXJlTWludXRlXCI6MTQ0MDAsXCJyZWFsVG9rZW5FeHBpcmVNaW51dGVcIjoyODgwLFwicmVmcmVzaFRva2VuRXhwaXJlSG91cnNcIjoyNDAsXCJ0b2tlbkV4cGlyZUhvdXJzXCI6NDgsXCJ1aWRcIjoxMDAxNX0iLCJpc3MiOiIxMDAxNV9fQ0xJRU5UIiwiZXhwIjoxNTA1MzY3NDc2fQ.uUZM2zPQfHB6RpbRB6DxYolG19yavdHZ4HFz822IGr4'
  axios.defaults.withCredentials = true
}

// 返回状态判断
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  /*
  * 奖励任务
  * */
  /* 任务列表 */
  rewardsList (params) {
    return fetch('/biz/std_mendian/task/client/v1/queryTasks.action', params)
  },
  /* 检测是否有上报记录 */
  rewardsCheck (params) {
    return fetch('/biz/std_mendian/task/client/v1/canDoTask.action', params)
  },
  /* 任务详情 */
  rewardsDetail (params) {
    return fetch('/biz/std_mendian/task/client/v1/queryTaskInfo.action', params)
  },
  /* 任务记录初始化 */
  rewardsRecordInit (params) {
    return fetch('/biz/std_mendian/task/client/v1/taskReportList.action', params)
  },
  /* 任务上报 */
  rewardsReportInit (params) {
    return fetch('/biz/std_mendian/task/client/v1/queryTaskTemplate.action', params)
  },
  /* 任务规则 */
  rewardsRule (params) {
    return fetch('/biz/std_mendian/task/client/v1/getTaskRule.action', params)
  },
  /* 任务上报 */
  rewardsReport (params) {
    return fetch('/biz/std_mendian/task/client/v1/saveTaskReport.action', params)
  },
  /*
  * 商品
  * */
  goodsList (params) {
    return fetch('/biz/std_mendian/pd/client/v1/queryPds.action', params)
  },
  /*
  * 库存管理
  * */
  // 仓库列表
  storeList (params) {
    return fetch('/dms/inventory/init.action', params)
  },
  // 库存商品列表
  repertory (params) {
    return fetch('/dms/stock/list.action', params)
  },
  // 盘点提交
  saveInventory (params) {
    return fetch('/dms/inventory/save.action', params)
  }
}
