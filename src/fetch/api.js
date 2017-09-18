import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

const env = process.env.NODE_ENV

if (env === 'development') {
  axios.defaults.baseURL = 'http://接口ip:8080'
  axios.defaults.withCredentials = true
}

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

const buildGetUrl = function (url, params) {
  var result = Object.params(params)
  if (result) return url + '?' + result
  return url
}
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(buildGetUrl(url, params)).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(response => {
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
    return post('/biz/std_mendian/task/client/v1/queryTasks.action', params)
  },
  /* 检测是否有上报记录 */
  rewardsCheck (params) {
    return post('/biz/std_mendian/task/client/v1/canDoTask.action', params)
  },
  /* 任务详情 */
  rewardsDetail (params) {
    return post('/biz/std_mendian/task/client/v1/queryTaskInfo.action', params)
  },
  /* 任务记录初始化 */
  rewardsRecordInit (params) {
    return post('/biz/std_mendian/task/client/v1/taskReportList.action', params)
  },
  /* 任务上报 */
  rewardsReportInit (params) {
    return post('/biz/std_mendian/task/client/v1/queryTaskTemplate.action', params)
  },
  /* 任务规则 */
  rewardsRule (params) {
    return post('/biz/std_mendian/task/client/v1/getTaskRule.action', params)
  },
  /* 任务上报 */
  rewardsReport (params) {
    return post('/biz/std_mendian/task/client/v1/saveTaskReport.action', params)
  },
  /*
  * 商品
  * */
  // 商品列表
  goodsList (params) {
    return post('/biz/std_mendian/pd/client/v1/queryPds.action', params)
  },
  // 商品品牌
  goodsBrand () {
    return get('/biz/std_mendian/pd/client/v1/queryPdBrands.action')
  },
  // 商品类型
  goodsType () {
    return get('/biz/std_mendian/pd/client/v1/queryPdTypes.action')
  },
  /*
  * 公告
  * */
  // 公告详情
  bannerDetail (params) {
    return post('/biz/std_mendian/notice/client/v1/queryNoticeInfo.action', params)
  },
  /*
  * 库存管理
  * */
  // 仓库列表
  storeList () {
    return get('/dms/inventory/init.action')
  },
  // 库存商品列表
  repertory (params) {
    return get('/dms/stock/list.action', params)
  },
  // 盘点提交
  saveInventory (params) {
    return post('/dms/inventory/save.action', params)
  },
  // 地址增加
  addressAdd (params) {
    return post('/address/createOrUpdate.action', params)
  },
  // 地址列表
  addressList () {
    return get('/address/list.action')
  },
  // 地址删除
  addressDelete (params) {
    return post('/address/delete.action', params)
  },
  // 根据ID获取地址详情
  addressDetailById (params) {
    return post('/address/queryById.action', params)
  },
  // 盘点记录列表
  inventoryList (params) {
    return post('/dms/inventory/list.action', params)
  },
  // 盘点详情
  inventoryDetail (params) {
    return post('/dms/inventory/detail.action', params)
  },
  /*
  * 销售订单
  * */
  // 销售订单列表
  orderIndex (params) {
    return post('/app/dms/client/salesordermanager/queryPurchases.action', params)
  },
  // 销售订单详情
  orderDetails (params) {
    return get('/app/dms/client/salesordermanager/getPurchaseById.action', params)
  },
  // 销售发货详情
  orderSaleSend (params) {
    return get('/app/dms/client/salesordermanager/getSalesOrderSentDetailById.action', params)
  },
  // 销售发货提交
  orderSendDetails (params) {
    return get('/app/dms/client/salesordermanager/saveOrderSentVerify.action', params)
  },
  // 销售发货签收
  orderSendSign (params) {
    return get('/app/dms/client/salesordermanager/getSentAndSignBaseInfosByOrderId.action', params)
  },
  // 销售评价
  orderEvaluate (params) {
    return get('/app/dms/client/salesordermanager/getOrderReviewInfo.action', params)
  },
  /*
  * 回单确认
  * */
  // 回单确认列表
  receiptIndex (params) {
    return post('/app/dms/client/salesordermanager/getSalesOrderWaitSignData.action', params)
  },
  // 回单确认详情
  receiptDetails (params) {
    return get('/app/dms/client/salesordermanager/getSalesOrderSignDetailById.action', params)
  },
  // 回单确认提交
  receiptDetailsSend (params) {
    return get('/app/dms/client/salesordermanager/saveOrderSign.action', params)
  }
}
