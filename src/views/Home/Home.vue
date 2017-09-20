<template>
<div>
  <div class="page">
    <header class="header">
      <Titlebar title="SeedsUI" back="true">
        <a slot="right" class="titlebar-button" href="javascript:showAbout()">
          <i class="icon icon-rdoinfo"></i>
        </a>
      </Titlebar>
    </header>
    <article class="container">
      <ul class="list">
        <li class="sliver underline">
          <p class="sliver-title">布局 Layout</p>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'FlexDemo'}">
            <p class="list-container">Flex布局</p> <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'SpaceDemo'}">
            <p class="list-container">Space间距</p> <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>

        <li class="sliver underline">
          <p class="sliver-title">导航 Navigation</p>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'titlebarDemo'}">
            <p class="list-container">TitleBar</p> <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'tabbarDemo'}">
            <p class="list-container">TabBar</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>

        <li class="sliver underline">
          <p class="sliver-title">数据录入 Data Entry</p>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'buttonDemo'}">
            <p class="list-container">Button</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'pickerDemo'}">
            <p class="list-container">Picker</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'formDemo'}">
            <p class="list-container">Form</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'starDemo'}">
            <p class="list-container">Star</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>

        <li class="sliver underline">
          <p class="sliver-title">数据展示 Data Display</p>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'iconfontDemo'}">
            <p class="list-container">Iconfont</p> <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'markDemo'}">
            <p class="list-container">Mark</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'badgeDemo'}">
            <p class="list-container">Badge</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'groupDemo'}">
            <p class="list-container">Group</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'cardDemo'}">
            <p class="list-container">Card</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'gridDemo'}">
            <p class="list-container">Grid</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'carrouselDemo'}">
            <p class="list-container">Carrousel</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'carrouselPageDemo'}">
            <p class="list-container">CarrouselPage</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'imglazyDemo'}">
            <p class="list-container">imglazyDemo</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <!-- <router-link class="list-li underline" :to="{name: 'group-rowDemo'}">
            <p class="list-container">行分组</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        <li>
          <router-link class="list-li underline" :to="{name: 'tableDemo'}">
            <p class="list-container">Table</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li> -->

        <li class="sliver underline">
          <p class="sliver-title">操作反馈 Feedback</p>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'popupDemo'}">
            <p class="list-container">Popup</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'loadingDemo'}">
            <p class="list-container">Loading</p> <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>

        <li class="sliver underline">
          <p class="sliver-title">手势 Gesture</p>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'dragRefreshDemo'}">
            <p class="list-container">Dragrefresh下拉刷新</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li underline" :to="{name: 'pullListDemo'}">
            <p class="list-container">PullList列表拉动</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
      </ul>
    </article>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to SeedsUI'
    }
  },
  created () {
    /* this.$http.getHomeData.then(response => {
      let result = response
      if (result.code === '1') {
      } else {
        console.log('获取数据失败')
      }
    })
    .catch(err => {
      console.log('获取数据失败' + err)
    }) */
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/seedsui/styles/variables.less";
  .titlebar-title{
    padding-left: 12px;
  }
</style>
