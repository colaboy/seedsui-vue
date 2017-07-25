var Weixin = {
  config: function (fn) {
    var url = '/app/std_mendian/hbtask/getSignature.action'
    var reqUrl = window.location.href.split('#')[0]
    var reqData = {
      url: reqUrl
    }
    /* eslint-disable */
    $.ajax({
      type: 'post',
      url: url,
      data: reqData,
      dataType: 'json',
      success: function(val) {
        var conf = {
          appId: val.corpId,
          timestamp: val.timestamp,
          nonceStr: val.nonceStr,
          signature: val.signature,
          jsApiList: ['chooseImage', 'uploadImage', 'getLocation']
        }
        conf.debug = false

        wx.config(conf)
        if (fn) fn()
      },
      error: function() {
        // alert('微信配置错误，请检查是否取得证书')
      }
    })
    /* eslint-enable */
  },
  getLocation: function (callback) {
    /* eslint-disable */
    wx.getLocation({
      // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      type: 'wgs84',
      success: function (res) {
        if(callback)callback(res)
      },
      fail: function (res) {
        if(callback)callback(res)
      }
    })
    /* eslint-enable */
  },
  Image: function (params) {
    var defaults = {
      max: 5,
      sourceType: ['album', 'camera'],
      sizeType: ['original', 'compressed']
      /*
      Callbacks:
      onChooseSuccess:function(imgs,imgMap)
      onChooseFail:function(imgs,imgMap)
      onChooseCancel:function()
      onUploadSuccess:function(imgs,imgMap)
      onUploadsSuccess:function(imgs,imgMap)
      onDeleteSuccess:function(imgs,imgMap)
      */
    }
    params = params || {}
    for (var def in defaults) {
      if (!params[def]) {
        params[def] = defaults[def]
      }
    }
    var s = this
    s.params = params
    // 防双击
    s.isClicked = false
    s.imgs = []
    s.imgMap = {}
    s.choose = function () {
      if (s.isClicked) {
        /* eslint-disable */
        alert('微信正在检测环境，请稍等...')
        /* eslint-enable */
        return
      }
      s.isClicked = true
      let leftPic = s.params.max - s.imgs.length
      var count = leftPic > s.params.max ? s.params.max : leftPic
      if (count < 0) count = 0
      /* eslint-disable */
      wx.chooseImage({
        count: count, // 默认5
        sizeType: s.params.sizeType, // 可以指定是原图还是压缩图，默认二者都有
        sourceType: s.params.sourceType, // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          for(var i=0,localId;localId=res.localIds[i++];){
            if(s.imgMap[localId]){
              alert('照片已存在，请勿重复上传！')
              continue
            }
            s.imgMap[localId]=''
          }
          s.imgs = Object.keys(s.imgMap)
          s.isClicked = false
          if(s.params.onChooseSuccess)s.params.onChooseSuccess(s.imgs, s.imgMap)
          s.upload()
        },
        fail: function (res) {
          s.isClicked = false
          if(s.params.onChooseFail)s.params.onChooseFail(s.imgs, s.imgMap)
        },
        cancel: function () {
          s.isClicked = false
          if(s.params.onChooseCancel)s.params.onChooseCancel()
        },
        complete: function () {
          s.isClicked = false
        }
      })
      /* eslint-enable */
    }
    s.deleteImg = function (key) {
      delete s.imgMap[key]
      s.imgs = Object.keys(s.imgMap)
      if (s.params.onDeleteSuccess) s.params.onDeleteSuccess(s.imgs, s.imgMap)
    }
    s.deleteAfterImg = function (index) {
      for (var i = index, img; s.imgs[i++];) {
        delete s.imgMap[img]
      }
      s.imgs = Object.keys(s.imgMap)
      if (s.params.onDeleteSuccess) s.params.onDeleteSuccess(s.imgs, s.imgMap)
    }
    s.destory = function () {
      s.imgMap = {}
      s.imgs = []
      if (s.params.onDeleteSuccess) s.params.onDeleteSuccess(s.imgs, s.imgMap)
    }
    s.upload = function () {
      let imgs = s.imgs
      let loop = function (index) {
        /* eslint-disable */
        if (index >= imgs.length) {
          return
        }
        let img = imgs[index]
        if (s.imgMap[img]) {
          loop(++index)
          return
        }
        wx.uploadImage({
          localId: img, // 需要上传的图片的本地ID，由chooseImage接口获得
          isShowProgressTips: 1, // 默认为1，显示进度提示
          success: function (res) {
            let serverId = res.serverId; // 返回图片的服务器端ID
            s.imgMap[img] = serverId
            if (s.params.onUploadSuccess) s.params.onUploadSuccess(s.imgs, s.imgMap)
            if (index >= imgs.length-1 && s.params.onUploadsSuccess) s.params.onUploadsSuccess(s.imgs, s.imgMap)
            loop(++index)
          },
          fail: function (res) {
            alert('第'+index+'张图片上传失败，稍后请重试')
            s.deleteImg(img)
            loop(++index)
          }
        })
        /* eslint-enable */
      }
      loop(0)
    }
  }
}

export default Weixin
