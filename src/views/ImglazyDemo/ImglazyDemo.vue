<template>
<div>
  <header>
    <Titlebar title="imglazy" :rBtn="[{text:'新增图片',click:onClickAdd}]"/>
  </header>
  <article>
    <img :src="imgs.online.url" class="lazyimg" />
    <ImgLazy ref="imgLazy">
      <img data-load-src="abc.jpg" :data-error-src="imgs.default.url" :src="imgs.default.url" class="lazyimg" />
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
  </article>
</div>
</template>

<script>
import defaultUrl from './default.jpg'
export default {
  name: 'ImglazyDemo',
  data () {
    return {
      imgs: {
        default: {url: defaultUrl},
        online: {url: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg'}
      }
    }
  },
  methods: {
    onClickAdd () {
      console.log('新增')
      // 图片预加载刷新
      this.$refs.imgLazy.instance.update()
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/styles/variables.less";
  .lazyimg{
    display: block;
    width: 100%;
    min-height: 210px;
    background-color: #ececec;
    margin-bottom:4px;
  }
</style>
