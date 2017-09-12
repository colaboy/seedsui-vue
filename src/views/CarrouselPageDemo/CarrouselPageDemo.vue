<template>
<div class="page">
  <header class="header">
    <Titlebar title="库存管理" back="true"></Titlebar>
    <Tabbar :list="tabbar" :activeIndex="tabbarActive"></Tabbar>
  </header>
  <article style="top:84px;">
    <Carrousel ref="refCarrousel" :page="2" css="height:100%" :change="onSlideChangeEnd">
      <div slot="carrousel-1">第一页</div>
      <div slot="carrousel-2">第二页</div>
    </Carrousel>
  </article>
</div>
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
  @import "../../assets/seedsui/styles/variables.less";
</style>
