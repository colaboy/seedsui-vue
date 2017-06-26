<template>
<div>
  <header>
    <div class="titlebar">
      <h1 class="titlebar-title">SeedsUI</h1>
      <a class="titlebar-button" href="javascript:showAbout()"><i class="icon icon-rdoinfo"></i></a>
    </div>
  </header>
  <article>
    <ul class="list">
      <li class="statusbar underline">
        <p class="statusbar-title">文字图标</p>
      </li>
      <li>
        <router-link class="list-li underline" to="iconfont">
          <p class="list-container">文字图标</p> <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li class="statusbar underline">
        <p class="statusbar-title">导航控件</p>
      </li>
      <li>
        <router-link class="list-li underline" to="titlebar">
          <p class="list-container">TitleBar</p> <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="tabbar">
          <p class="list-container">TabBar</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li class="statusbar underline">
        <p class="statusbar-title">按钮</p>
      </li>
      <li>
        <router-link class="list-li underline" to="button">
          <p class="list-container">Button</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li class="statusbar underline">
        <p class="statusbar-title">徽章</p>
      </li>
      <li>
        <router-link class="list-li underline" to="badge">
          <p class="list-container">Badge</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li class="statusbar underline">
        <p class="statusbar-title">分组</p>
      </li>
      <li>
        <router-link class="list-li underline" to="group-block">
          <p class="list-container">块级分组</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="group-card">
          <p class="list-container">卡片分组</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="group-row">
          <p class="list-container">行分组</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li class="statusbar underline">
        <p class="statusbar-title">表格</p>
      </li>
      <li>
        <router-link class="list-li underline" to="table">
          <p class="list-container">Table</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li class="statusbar underline">
        <p class="statusbar-title">栅格</p>
      </li>
      <li>
        <router-link class="list-li underline" to="grid">
          <p class="list-container">九宫格</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="grid-metro">
          <p class="list-container">块级栅格</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li class="statusbar underline">
        <p class="statusbar-title">列表</p>
      </li>
      <li>
        <router-link class="list-li underline" to="list">
          <p class="list-container">列表</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li class="statusbar underline">
        <p class="statusbar-title">基础组件</p>
      </li>
      <li>
        <router-link class="list-li underline" to="animate">
          <p class="list-container">动画</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="bg">
          <p class="list-container">背景</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="layout">
          <p class="list-container">布局</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="shape">
          <p class="list-container">形状</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="code">
          <p class="list-container">代码展现</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li class="statusbar underline">
        <p class="statusbar-title">错误页面</p>
      </li>
      <li>
        <router-link class="list-li underline" to="404">
          <p class="list-container">404</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="500">
          <p class="list-container">500</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="nowifi">
          <p class="list-container">无网络</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
    </ul>
  </article>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to SeedsUI'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .titlebar-title{
    padding-left: 12px;
  }
</style>
