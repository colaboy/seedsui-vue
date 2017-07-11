<template>
  <div>
    <p class="color-sub" style="margin-top:1em;padding-left:0.5em">图片上传({{imgs.length}}/{{max}})</p>
    <ul class="grid app-grid-photo" data-col="3">
      <li v-for="(img,index) in imgs">
        <!-- <a :index="index" :key="index" class="grid-icon" :style="{backgroundImage:'url('+img+')'}">
          <span class="close" @click="deleteImg(index)"><i class="icon icon-close">X</i></span>
        </a> -->
        <a :index="index" :key="index" class="grid-icon">
          <div style="width:100%;height:100%;overflow:hidden;">
            <img :src="img" style="width:100%;" />
          </div>
          <span class="close" @click="deleteImg(index)"><i class="icon icon-close">X</i></span>
        </a>
      </li>
      <li v-show="isMax < max">
        <a class="grid-icon app-grid-icon-add" @click="loadImg">
          <i class="icon icon-plus size40"></i>
        </a>
      </li>
      </ul>
  </div>
</template>
<script>
let imgServerMap = {}
export default {
  name: 'WxPhoto',
  props: {
    title: String,
    required: String,
    max: Number,
    sourcetype: {
      type: Array,
      default: ['camera']
    }
  },
  data () {
    return {
      isClicked: false,
      imgs: [],
      serverIds: [],
      truth: '',
      isValid: false
    }
  },
  methods: {
    loadImg () {
      var self = this
      if (self.isClicked) {
        /* eslint-disable */
        alert('微信正在检测环境，请稍等...')
        /* eslint-enable */
        return
      }
      self.isClicked = true
      var sourceType = self.sourcetype
      let leftPic = self.max - self.imgs.length
      /* eslint-disable */
      wx.chooseImage({
        count: leftPic > 5 ? 5 : leftPic, // 默认5
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: sourceType, // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          self.$emit('onChooseSuccess', res)
          /*if(window.__wxjs_is_wkwebview){
            wx.getLocalImgData({
                localId: res.localIds[0],
                success: function (res) {
                    var localData = res.localData;
                    localData = localData.replace('jgp', 'jpeg');
                    self.imgs = self.imgs.push(localData);
                },
                fail:function(res){
                    alert(res.errMsg);
                }
            })
          }else{
            self.imgs = res.localIds.concat(self.imgs)
          }*/
          self.imgs = res.localIds.concat(self.imgs)
          // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          self.upload()
        },
        fail: function (res) {
          self.$emit('onChooseFail', res)
          /* eslint-disable */
          // alert(JSON.stringify(res))
          /* eslint-enable */
        },
        cancel: function () {
          self.$emit('onChooseCancel')
        },
        complete: function () {
          self.isClicked = false
        }
      })
      /* eslint-enable */
      self.isValid = false
    },
    deleteImg (index) {
      this.imgs.splice(index, 1)
      this.isValid = false
    },
    upload () {
      let self = this
      let imgs = this.imgs
      let loop = function (index) {
        if (index === imgs.length) {
          return
        }
        let img = imgs[index]
        if (imgServerMap.hasOwnProperty(img)) {
          self.serverIds.push(imgServerMap[img])
          return
        }
        /* eslint-disable */
        wx.uploadImage({
          localId: img, // 需要上传的图片的本地ID，由chooseImage接口获得
          isShowProgressTips: 1, // 默认为1，显示进度提示
          success: function (res) {
            let serverId = res.serverId; // 返回图片的服务器端ID
            self.serverIds.push(serverId);
            imgServerMap[img] = serverId;
            if(self.serverIds.length === imgs.length){
              self.truth = self.serverIds.join(',')
              imgServerMap = {}
              self.serverIds = []
            }
            loop(++index)
            self.isValid = true
          }
        })
        /* eslint-enable */
      }
      loop(0)
    }
  },
  computed: {
    isMax () {
      return this.imgs.length
    }
  },
  mounted () {
    /* eslint-disable */
    // alert(this.sourcetype)
    /* eslint-enable */
    this.$on('inspireUploadReset', () => {
      this.imgs = []
    })
  }
}
</script>
<style lang="less">
  .icon-plus{
    background-size: cover;
    background-image: url('../assets/plus.png');
  }
  .app-grid-photo li{
    padding: 0.5em;
  }
  .app-grid-photo .grid-icon{
    height: 180px;
    width: 100%;
    background-color: #FAFAFA;
    background-size: cover;
    color: #e5e5e5;
  }
  .app-grid-photo .app-grid-icon-add{
    border:1px dashed #A6A6A6;
  }
  .app-grid-photo .close{
    position: absolute;
    top:-12px;
    left:-12px;
    background-color: #FF6A54
  }
  .app-grid-photo .icon{
    pointer-events:none;
  }
</style>