<template>
<Page>
  <Header>
    <Titlebar title="库存管理"></Titlebar>
    <Tabbar :list="tabbar" :activeIndex="tabbarActive"></Tabbar>
  </Header>
  <Container css="top:84px;">
    <Carrousel ref="refCarrousel" pagination="" :page="2" css="height:100%" :change="onSlideChangeEnd">
      <!--第一页:start-->
      <div slot="carrousel-1" style="overflow:hidden;width:100%;height:100%;">第一页</div>
      <!--第二页:start-->
      <div slot="carrousel-2" style="overflow:hidden;width:100%;height:100%;position:relative;">第二页</div>
    </Carrousel>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'CarrouselPageDemo',
  data () {
    return {
      tabbarActive: 0,
      tabbar: [
        {
          text: '库存盘点',
          click: this.onClickTabbar
        },
        {
          text: '库存查询',
          click: this.onClickTabbar
        }
      ]
    }
  },
  methods: {
    onSlideChangeEnd (e) {
      this.tabbarActive = e.activeIndex
    },
    onClickTabbar (item, index) {
      this.tabbarActive = index
      this.$refs.refCarrousel.instance.slideTo(index)
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/core/seedsui-variables.less";
</style>
