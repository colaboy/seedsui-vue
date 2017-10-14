<template>
<div>
  <Page>
    <Header>
      <Titlebar title="SeedsUI">
        <a slot="right" class="titlebar-button" href="javascript:showAbout()">
          <i class="icon icon-rdoinfo"></i>
        </a>
      </Titlebar>
    </Header>
    <Container>
      <ul class="list">
        <li class="sliver border-b">
          <p class="sliver-title">布局 Layout</p>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'flexDemo'}">
            <p class="list-container">Flex</p>
            <small>布局</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'spaceDemo'}">
            <p class="list-container">Space</p>
            <small>间距</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'rowDemo'}">
            <p class="list-container">Row</p>
            <small>行</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'listDemo'}">
            <p class="list-container">List</p>
            <small>传统列表</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>

        <li class="sliver border-b">
          <p class="sliver-title">导航 Navigation</p>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'titlebarDemo'}">
            <p class="list-container">TitleBar</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'tabbarDemo'}">
            <p class="list-container">TabBar</p>
            <small>页签</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>

        <li class="sliver border-b">
          <p class="sliver-title">数据录入 Data Entry</p>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'buttonDemo'}">
            <p class="list-container">Button</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'pickerDemo'}">
            <p class="list-container">Picker</p>
            <small>选择器</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'formDemo'}">
            <p class="list-container">Form</p>
            <small>表单</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'starDemo'}">
            <p class="list-container">Star</p>
            <small>评星</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>

        <li class="sliver border-b">
          <p class="sliver-title">数据展示 Data Display</p>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'iconfontDemo'}">
            <p class="list-container">Iconfont</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'markDemo'}">
            <p class="list-container">Mark</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'badgeDemo'}">
            <p class="list-container">Badge</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'groupDemo'}">
            <p class="list-container">Group</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'cardDemo'}">
            <p class="list-container">Card</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'gridDemo'}">
            <p class="list-container">Grid</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'carrouselDemo'}">
            <p class="list-container">Carrousel</p>
            <small>轮播图</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'carrouselPageDemo'}">
            <p class="list-container">CarrouselPage</p>
            <small>轮播页</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'imglazyDemo'}">
            <p class="list-container">Imglazy</p>
            <small>懒人加载</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'gaugeDemo'}">
            <p class="list-container">Gauge</p>
            <small>仪表盘</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'doughnutDemo'}">
            <p class="list-container">Doughnut</p>
            <small>环形图</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'clockDemo'}">
            <p class="list-container">Clock</p>
            <small>时钟</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'progressDemo'}">
            <p class="list-container">Progress</p>
            <small>进度条</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'progressDemo'}">
            <p class="list-container">Weather</p>
            <small>天气</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <router-link class="list-li border-b" :to="{name: 'tableDemo'}">
            <p class="list-container">Table</p>
            <small>表格</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        <li>
          <router-link class="list-li border-b" :to="{name: 'shapeDemo'}">
            <p class="list-container">Shape</p>
            <small>形状</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>

        <li class="sliver border-b">
          <p class="sliver-title">操作反馈 Feedback</p>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'popupDemo'}">
            <p class="list-container">Popup</p>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'loadingDemo'}">
            <p class="list-container">Loading</p> <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'timepartDemo'}">
            <p class="list-container">Timepart</p>
            <small>时间段</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'calendarDemo'}">
            <p class="list-container">Calendar</p>
            <small>日历</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'historyDemo'}">
            <p class="list-container">History</p>
            <small>地址栏监听</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li class="sliver border-b">
          <p class="sliver-title">手势 Gesture</p>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'dragRefreshDemo'}">
            <p class="list-container">Dragrefresh</p>
            <small>下拉刷新</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'pullListDemo'}">
            <p class="list-container">PullList</p>
            <small>列表拉动</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'asideDemo'}">
            <p class="list-container">Aside</p>
            <small>侧边栏</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'shakeDemo'}">
            <p class="list-container">Shake</p>
            <small>摇一摇</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'indexbarDemo'}">
            <p class="list-container">Indexbar</p>
            <small>通讯录索引</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li class="sliver border-b">
          <p class="sliver-title">本地能力 Native</p>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'mediaDemo'}">
            <p class="list-container">Media</p>
            <small>多媒体</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'mapDemo'}">
            <p class="list-container">Map</p>
            <small>地图</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
        <li>
          <router-link class="list-li border-b" :to="{name: 'otherDemo'}">
            <p class="list-container">Other</p>
            <small>定位/电话/短信/邮箱等</small>
            <i class="list-icon icon-arrowright"></i>
          </router-link>
        </li>
      </ul>
    </Container>
  </Page>
  <transition name="fade">
    <router-view></router-view>
  </transition>
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
    this.queryList()
  },
  methods: {
    queryList () {
      /* this.$http.getData().then(response => {
        let result = response
        console.log(result)
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
}
</script>

<style lang="less" scoped>
  @import "../../assets/seedsui/seedsui-variables.less";
  .titlebar-title{
    padding-left: 12px;
  }
</style>
