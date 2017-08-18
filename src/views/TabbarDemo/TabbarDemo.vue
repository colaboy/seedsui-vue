<template>
<div>
  <header>
    <Titlebar title="Tabbar" />
  </header>
  <article>
    <div class="description">line</div>
    <Tabbar :list="list" :active="0"></Tabbar>
    <br/>
    <div class="description">line reverse</div>
    <Tabbar :list="list" theme="reverse" activeStatus="0"></Tabbar>
    <br/>
    <div class="description">rect</div>
    <Tabbar :list="list" type="rect" activeStatus="0"></Tabbar>
    <br/>
    <div class="description">rect reverse</div>
    <div class="bg-primary" style="padding:8px 0">
      <Tabbar :list="list" theme="reverse" type="rect" activeStatus="0"></Tabbar>
    </div>
    <br/>
    <div class="description">lump</div>
    <Tabbar :list="list" type="lump" activeStatus="0"></Tabbar>
    <br/>
    <div class="description">lump reverse</div>
    <Tabbar :list="list" theme="reverse" type="lump" activeStatus="0"></Tabbar>
    <br/>
    <div class="description">footer</div>
    <Tabbar :list="list" type="footer" activeStatus="0"></Tabbar>
    <br/>
    <div class="description">footer reverse</div>
    <Tabbar :list="list" theme="reverse" type="footer" activeStatus="0"></Tabbar>
    <br/>
  </article>
</div>
</template>

<script>
export default {
  name: 'TabbarDemo',
  data () {
    return {
      list: [
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
  @import "../../assets/styles/variables.less";
  .description{
      color: #9e9e9e;
      text-align: center;
      height: 32px;
      line-height: 32px;
  }  
</style>
