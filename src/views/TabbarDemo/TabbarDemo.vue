<template>
<div>
  <header>
    <Titlebar title="Tabbar" back="true"></Titlebar>
  </header>
  <article>
    <div class="description">tabbar-line</div>
    <Tabbar :data="lineData" activeStatus="0"></Tabbar>
    <br/>
    <div class="description">tabbar-line reverse</div>
    <Tabbar :data="lineData" tabbarClass="reverse" activeStatus="0"></Tabbar>
    <br/>
    <div class="description">tabbar-rect</div>
    <Tabbar :data="rectData" type="rect" activeStatus="0"></Tabbar>
    <br/>
    <div class="description">tabbar-rect reverse</div>
    <div class="bg-primary" style="padding:8px 0">
      <Tabbar :data="rectData" tabbarClass="reverse" type="rect" activeStatus="0"></Tabbar>
    </div>
    <br/>
    <div class="description">tabbar-lump</div>
    <Tabbar :data="lineData" type="lump" activeStatus="0"></Tabbar>
    <br/>
    <div class="description">tabbar-lump reverse</div>
    <Tabbar :data="lineData" tabbarClass="reverse" type="lump" activeStatus="0"></Tabbar>
    <br/>
    <div class="description">tabbar-footer</div>
    <Tabbar :data="footData" type="footer" activeStatus="0"></Tabbar>
    <br/>
    <div class="description">tabbar-footer reverse</div>
    <Tabbar :data="footData" tabbarClass="reverse" type="footer" activeStatus="0"></Tabbar>
    <br/>
  </article>
</div>
</template>

<script>
export default {
  name: 'TabbarDemo',
  data () {
    return {
      lineData: [
        {
          text: '全部',
          status: '5'
        },
        {
          text: '待确认',
          status: '0',
          colorClass: 'bg-blue'
        },
        {
          text: '待发货',
          status: '1',
          colorClass: 'bg-green'
        },
        {
          text: '已取消',
          status: '2',
          colorClass: 'bg-grey'
        },
        {
          text: '已完成',
          status: '3',
          colorClass: 'bg-green'
        },
        {
          text: '待签收',
          status: '6',
          colorClass: 'bg-green'
        }
      ],
      rectData: [
        {
          text: '机构',
          status: '0'
        },
        {
          text: '组织',
          status: '1',
          colorClass: 'bg-blue'
        }
      ],
      footData: [
        {
          text: '首页',
          status: '0',
          icon: 'icon-home'
        },
        {
          text: '消息',
          status: '1',
          icon: 'icon-chat'
        },
        {
          text: '通讯录',
          status: '2',
          icon: 'icon-contact'
        },
        {
          text: '工作台',
          status: '3',
          icon: 'icon-grid'
        },
        {
          text: '更多',
          status: '4',
          icon: 'icon-rdomore'
        }
      ]
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
