<template>
<div class="page">
  <header class="header">
    <Titlebar title="imglazy" :rBtn="[{text:'新增图片',click:onClickAdd}]"/>
  </header>
  <ImgLazy ref="refImgLazy" className="container">
    <img :data-load-src="imgs.online.url" :data-error-src="imgs.default.url" src="" class="lazyimg" />
    <img :data-load-src="imgs.online.url" :data-error-src="imgs.default.url" src="" class="lazyimg" />
    <img :data-load-src="imgs.online.url" :data-error-src="imgs.default.url" src="" class="lazyimg" />
    <img :data-load-src="imgs.online.url" :data-error-src="imgs.default.url" src="" class="lazyimg" />
    <img :data-load-src="imgs.online.url" :data-error-src="imgs.default.url" src="" class="lazyimg" />
    <img :data-load-src="imgs.online.url" :data-error-src="imgs.default.url" src="" class="lazyimg" />
    <img :data-load-src="imgs.online.url" :data-error-src="imgs.default.url" src="" class="lazyimg" />
    <img :data-load-src="imgs.online.url" :data-error-src="imgs.default.url" src="" class="lazyimg" />
    <img :data-load-src="imgs.online.url" :data-error-src="imgs.default.url" src="" class="lazyimg" />
    <img :data-load-src="imgs.online.url" :data-error-src="imgs.default.url" src="" class="lazyimg" />
    <div style="height: 210px;" :data-load-src="imgs.online.url" data-error-src="" class="lazyimg"></div>
    <div style="height: 210px;" :data-load-src="imgs.online.url" data-error-src="" class="lazyimg"></div>
    <div style="height: 210px;" :data-load-src="imgs.online.url" data-error-src="" class="lazyimg"></div>
    <div style="height: 210px;" :data-load-src="imgs.online.url" data-error-src="" class="lazyimg"></div>
    <div style="height: 210px;" :data-load-src="imgs.online.url" data-error-src="" class="lazyimg"></div>
  </ImgLazy>
</div>
</template>

<script>
import defaultUrl from './default.jpg'
export default {
  name: 'ImglazyDemo',
  data () {
    return {
      overflowContainer: null,
      imgs: {
        default: {url: defaultUrl},
        online: {url: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg'}
      }
    }
  },
  mounted () {
    this.overflowContainer = this.$el.querySelector('article')
  },
  methods: {
    onClickAdd () {
      console.log('新增')
      // 图片预加载刷新
      this.$refs.refImgLazy.instance.update()
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/styles/variables.less";
  .lazyimg{
    display: block;
    width: 100%;
    min-height: 210px;
    background-color: #ececec;
    margin-bottom:4px;
  }
</style>
