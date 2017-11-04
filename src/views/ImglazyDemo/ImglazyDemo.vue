<template>
<Page>
  <Header>
    <Titlebar title="imglazy" :rBtn="[{text:'新增图片',click:onClickAdd}]"/>
  </Header>
  <ImgLazy ref="refImgLazy" classname="container" css="text-align:center">
    <img v-for="(item,index) in imgs" :key="index" :data-load-src="item" :data-error-src="imgDefault" src="" class="lazyimg" />
    <div v-for="(item,index) in imgs" :key="index" :data-load-src="item" data-error-src="imgDefault" class="lazyimg"></div>
  </ImgLazy>
</Page>
</template>

<script>
import defaultUrl from './default.jpg'
export default {
  name: 'ImglazyDemo',
  data () {
    return {
      overflowContainer: null,
      imgDefault: defaultUrl,
      imgs: [
        'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg',
        'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg',
        'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg',
        'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg'
      ]
    }
  },
  mounted () {
    this.overflowContainer = this.$el.querySelector('article')
  },
  methods: {
    onClickAdd () {
      // 插入新图片
      this.imgs.push('http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg')
      // 图片预加载刷新
      this.$refs.refImgLazy.instance.update()
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/seedsui-variables.less";
  .lazyimg{
    display: block;
    width: 300px;
    height: 210px;
    background-color: #ececec;
    margin: 12px auto;
  }
</style>
