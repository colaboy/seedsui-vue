<template>
<Page>
  <Header>
    <Titlebar title="carrousel" />
  </Header>
  <Container>
    <Carrousel ref="refCarrousel" :list="list" :pagination="true" css="height: 250px;" :loop="true"/>
    <Carrousel :list="list" :pagination="true" :slidesPerView="3" css="height: 80px;" :loop="true"/>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'CarrouselDemo',
  data () {
    return {
      list: [
        { img: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg', icon: 'icon-contact-fill', text: '通讯录', click: this.onClickContact },
        { img: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg', icon: 'icon-write-fill', text: '审批', click: this.onClickContact },
        { img: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg', icon: 'icon-position-fill', text: '定位', click: this.onClickPosition },
        { img: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg', icon: 'icon-gear-fill', text: '设置', click: this.onClickGear },
        { img: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg', icon: 'icon-folder-fill', text: '文档', click: this.onClickFolder },
        { img: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg', icon: 'icon-chartpie-fill', text: '数据分析', click: this.onClickChartpie }
      ]
    }
  },
  methods: {
    onClickContact (e) {
      console.log('通讯录')
    },
    onClickWrite (e) {
      console.log('审批')
    },
    onClickPosition (e) {
      console.log('定位')
    },
    onClickGear (e) {
      console.log('设置')
    },
    onClickFolder (e) {
      console.log('文档')
    },
    onClickChartpie (e) {
      console.log('数据分析')
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  @import "../../components/seedsui/seedsui-variables.less";
  .carrousel-slide{
    overflow: hidden;
  }
</style>
