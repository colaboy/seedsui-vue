<template>
  <Dialog ref="_refSharebox" position="bottom-center" animation="slideUp" css="width:100%;">
    <div class="sharebox" style="width:100%;">
      <div class="sharebox-title">
        分享至
      </div>
      <Grid :list="shareList"/>
      <div class="sharebox-close">
        <a class="icon icon-rdoclose" data-share="close" @click="onClickClose"></a>
      </div>
    </div>
  </Dialog>
</template>
<script>
export default {
  name: 'ShareBox',
  props: {
    list: {
      type: Array,
      default: function () {
        return ['qq', 'qqzone', 'weixin', 'fweixin', 'tsina', 'link']
      }
    }
  },
  data () {
    return {
      instance: null,
      shareList: []
    }
  },
  created () {
    if (this.list.indexOf('qq') >= 0) this.shareList.push({ icon: 'icon-qq-fill', text: 'QQ好友', click: this.onClickIcon })
    if (this.list.indexOf('qqzone') >= 0) this.shareList.push({ icon: 'icon-qqzone-fill', text: 'QQ空间', click: this.onClickIcon })
    if (this.list.indexOf('weixin') >= 0) this.shareList.push({ icon: 'icon-weixin-fill', text: '微信', click: this.onClickIcon })
    if (this.list.indexOf('fweixin') >= 0) this.shareList.push({ icon: 'icon-fweixin-fill', text: '微信朋友圈', click: this.onClickIcon })
    if (this.list.indexOf('tsina') >= 0) this.shareList.push({ icon: 'icon-tsina-fill', text: '新浪微博', click: this.onClickIcon })
    if (this.list.indexOf('link') >= 0) this.shareList.push({ icon: 'icon-link-fill', text: '复制链接', click: this.onClickIcon })
  },
  mounted () {
    this.instance = this.$refs._refSharebox.instance
  },
  methods: {
    onClickIcon (e) {
      if (e.target.querySelector('.icon-qq-fill')) {
        console.log('qq')
      } else if (e.target.querySelector('.icon-qqzone-fill')) {
        console.log('qqzone')
      } else if (e.target.querySelector('.icon-weixin-fill')) {
        console.log('weixin')
      } else if (e.target.querySelector('.icon-fweixin-fill')) {
        console.log('fweixin')
      } else if (e.target.querySelector('.icon-tsina-fill')) {
        console.log('tsina')
      } else if (e.target.querySelector('.icon-link-fill')) {
        console.log('link')
      }
    },
    onClickClose () {
      this.instance.hide()
    }
  }
}
</script>
<style lang="less">
  @import "sharebox.less";
  @import "../seedsui-tool.less";
</style>
