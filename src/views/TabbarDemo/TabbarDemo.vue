<template>
<Page>
  <Header>
    <Titlebar title="Tabbar" />
  </Header>
  <Container>
    <div class="description">line</div>
    <Tabbar :list="tabbar" :active="0"></Tabbar>
    <br/>
    <div class="description">line reverse</div>
    <Tabbar :list="tabbar" theme="reverse" :activeIndex="0"></Tabbar>
    <br/>
    <div class="description">rect</div>
    <Tabbar :list="tabbar" type="rect" :activeIndex="0"></Tabbar>
    <br/>
    <div class="description">rect reverse</div>
    <div class="bg-primary" style="padding:8px 0">
      <Tabbar :list="tabbar" theme="reverse" type="rect" :activeIndex="0"></Tabbar>
    </div>
    <br/>
    <div class="description">dropdown</div>
    <Tabbar :list="dropdownTabbar" type="dropdown" :activeIndex="0"></Tabbar>
    <br/>
    <div class="description">dropdown reverse</div>
    <Tabbar :list="dropdownTabbar" theme="reverse" type="dropdown" :activeIndex="0"></Tabbar>
    <br/>
    <div class="description">lump</div>
    <Tabbar :list="tabbar" type="lump" :activeIndex="0"></Tabbar>
    <br/>
    <div class="description">lump reverse</div>
    <Tabbar :list="tabbar" theme="reverse" type="lump" :activeIndex="0"></Tabbar>
    <br/>
    <div class="description">footer</div>
    <Tabbar :list="footerTabbar" type="footer" :activeIndex="0"></Tabbar>
    <br/>
    <div class="description">footer reverse</div>
    <Tabbar :list="footerTabbar" theme="reverse" type="footer" :activeIndex="0"></Tabbar>
    <br/>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'TabbarDemo',
  data () {
    return {
      tabbar: [
        {
          text: '首页',
          onClick: this.onClickTabbar
        },
        {
          text: '消息',
          onClick: this.onClickTabbar
        },
        {
          text: '通讯录',
          onClick: this.onClickTabbar
        },
        {
          text: '工作台',
          onClick: this.onClickTabbar
        },
        {
          text: '更多',
          onClick: this.onClickTabbar
        }
      ],
      dropdownTabbar: [
        {
          icon: 'shape-triangle-up',
          text: '分类',
          onClick: this.onClickDropDown
        },
        {
          icon: 'shape-triangle-up',
          text: '品牌',
          onClick: this.onClickDropDown
        },
        {
          icon: 'shape-triangle-up',
          text: '全部商品',
          onClick: this.onClickDropDown
        }
      ],
      footerTabbar: [
        {
          text: '首页',
          icon: 'icon-home',
          onClick: this.onClickTabbar
        },
        {
          text: '消息',
          icon: 'icon-chat',
          onClick: this.onClickTabbar
        },
        {
          text: '通讯录',
          icon: 'icon-contact',
          onClick: this.onClickTabbar
        },
        {
          text: '工作台',
          icon: 'icon-grid',
          onClick: this.onClickTabbar
        },
        {
          text: '更多',
          icon: 'icon-rdomore',
          onClick: this.onClickTabbar
        }
      ]
    }
  },
  methods: {
    onClickTabbar (item, index) {
      console.log(item.text)
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/seedsui-variables.less";
  .description{
      color: #9e9e9e;
      text-align: center;
      height: 32px;
      line-height: 32px;
  }  
</style>
