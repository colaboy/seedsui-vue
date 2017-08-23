<template>
<div>
  <header>
    <Titlebar title="Tabbar" />
  </header>
  <article>
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
    <Tabbar :list="tabbar" type="dropdown" :activeIndex="0"></Tabbar>
    <br/>
    <div class="description">dropdown reverse</div>
    <Tabbar :list="tabbar" theme="reverse" type="dropdown" :activeIndex="0"></Tabbar>
    <br/>
    <div class="description">lump</div>
    <Tabbar :list="tabbar" type="lump" :activeIndex="0"></Tabbar>
    <br/>
    <div class="description">lump reverse</div>
    <Tabbar :list="tabbar" theme="reverse" type="lump" :activeIndex="0"></Tabbar>
    <br/>
    <div class="description">footer</div>
    <Tabbar :list="tabbar" type="footer" :activeIndex="0"></Tabbar>
    <br/>
    <div class="description">footer reverse</div>
    <Tabbar :list="tabbar" theme="reverse" type="footer" :activeIndex="0"></Tabbar>
    <br/>
  </article>
</div>
</template>

<script>
export default {
  name: 'TabbarDemo',
  data () {
    return {
      tabbar: [
        {
          text: '首页',
          icon: 'icon-home',
          click: this.onClickTabbar
        },
        {
          text: '消息',
          icon: 'icon-chat',
          click: this.onClickTabbar
        },
        {
          text: '通讯录',
          icon: 'icon-contact',
          click: this.onClickTabbar
        },
        {
          text: '工作台',
          icon: 'icon-grid',
          click: this.onClickTabbar
        },
        {
          text: '更多',
          icon: 'icon-rdomore',
          click: this.onClickTabbar
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
  @import "../../assets/seedsui/styles/variables.less";
  .description{
      color: #9e9e9e;
      text-align: center;
      height: 32px;
      line-height: 32px;
  }  
</style>
