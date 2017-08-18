<template>
<div>
  <header>
    <Titlebar title="SeedsUI" back="true">
      <a slot="right" class="titlebar-button" href="javascript:showAbout()">
        <i class="icon icon-rdoinfo"></i>
      </a>
    </Titlebar>
  </header>
  <article>
    <ul class="list">
      <li class="sliver underline">
        <p class="sliver-title">基础组件</p>
      </li>
      <li>
        <router-link class="list-li underline" to="iconfontDemo">
          <p class="list-container">Iconfont</p> <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="loadingDemo">
          <p class="list-container">Loading</p> <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="titlebarDemo">
          <p class="list-container">TitleBar</p> <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="tabbarDemo">
          <p class="list-container">TabBar</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="buttonDemo">
          <p class="list-container">Button</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="markDemo">
          <p class="list-container">Mark</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="badgeDemo">
          <p class="list-container">Badge</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="groupDemo">
          <p class="list-container">Group</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="cardDemo">
          <p class="list-container">Card</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <!-- <router-link class="list-li underline" to="group-rowDemo">
          <p class="list-container">行分组</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      <li>
        <router-link class="list-li underline" to="tableDemo">
          <p class="list-container">Table</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li> -->
      <li>
        <router-link class="list-li underline" to="starDemo">
          <p class="list-container">Star</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="gridDemo">
          <p class="list-container">Grid</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="popupDemo">
          <p class="list-container">Popup</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="pickerDemo">
          <p class="list-container">Picker</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="formDemo">
          <p class="list-container">Form</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="carrouselDemo">
          <p class="list-container">Carrousel</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="imglazyDemo">
          <p class="list-container">imglazyDemo</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li class="sliver underline">
        <p class="sliver-title">栅格</p>
      </li>
      <li>
        <router-link class="list-li underline" to="gridDemo">
          <p class="list-container">九宫格</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="grid-metroDemo">
          <p class="list-container">块级栅格</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li class="sliver underline">
        <p class="sliver-title">列表</p>
      </li>
      <li class="sliver underline">
        <p class="sliver-title">基础组件</p>
      </li>
      <li>
        <router-link class="list-li underline" to="codeDemo">
          <p class="list-container">代码展现</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li class="sliver underline">
        <p class="sliver-title">错误页面</p>
      </li>
      <li>
        <router-link class="list-li underline" to="404Demo">
          <p class="list-container">404</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="500Demo">
          <p class="list-container">500</p>
          <i class="list-icon icon-arrowright"></i>
        </router-link>
      </li>
      <li>
        <router-link class="list-li underline" to="nowifiDemo">
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

<style lang="less" scoped>
  @import "../../assets/styles/variables.less";
  .titlebar-title{
    padding-left: 12px;
  }
</style>
