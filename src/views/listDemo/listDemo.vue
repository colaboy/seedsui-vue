<template>
<Page>
  <Header>
    <Titlebar title="List"></Titlebar>
  </Header>
  <Container>
      <Sliver title="普通列表" className="border-b"/>
      <ul class="list">
      <li class="list-li border-b noclick">
        <div class="list-thumbnail">
          <img src="http://mat1.gtimg.com/jiangsu/index_201704/img/logo.png" />
          <Sticker position="top left">
            <Icon className="size12 icon-fav-fill" css="position: absolute;top: -25px;left: 2px;"/>
          </Sticker>
        </div>
        <div class="list-container">
          <div class="list-title">
            新闻办公类标题
          </div>
          <div class="row box-middle">
            <i class="list-icon icon-person color-primary"></i>
            <p class="list-font">副标题</p>
          </div>
          <div class="row box-middle">
            <Icon class="list-icon icon-computer color-primary"/>
            <p class="list-font">副标题</p>
          </div>
        </div>
        <i class="list-icon icon-arrowright"></i>
      </li>
      <li class="list-li border-b">
        <div class="list-avatar">
          <span></span>
        </div>
        <div class="list-container">
          <p class="list-title">头像标题</p>
          <p class="list-font">副标题</p>
        </div>
        <i class="list-icon icon-arrowright"></i>
      </li>
      <li class="list-li border-b">
        <p class="list-container">一般标题</p>
        <i class="list-icon icon-arrowright"></i>
      </li>
    </ul>
    <div class="space-lg"></div>
    <Sliver title="时间轴列表" className="border-t border-b"/>
    <div style="background-color:white;">
      <ul class="timeline leftline" style="padding-top:1px;">
        <li style="margin-top: 10px;">
          <div class="timeline-badge">
            Any
          </div>
          <div class="card box-flex-1" style="padding:8px;">
            <p style="font-size:20px">11:24</p>
            <small class="nowrap">到达南京南站</small>
          </div>
        </li>
        <li style="margin-top: 10px;">
          <div class="timeline-badge">
            Any
          </div>
          <div class="card box-flex-1" style="padding:8px;">
            <p style="font-size:20px">11:24</p>
            <small class="nowrap">进入南京中转站</small>
          </div>
        </li>
      </ul>
    </div>
    <Stencil v-if="showStencil"></Stencil>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'listDemo',
  data () {
    return {
      showStencil: true
    }
  },
  mounted () {
    this.queryData()
  },
  methods: {
    queryData () {
      setTimeout(() => {
        this.showStencil = false
      }, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/seedsui-variables.less";
  .list-title{
    font-size: 16px;
  }
  .list-font{
    color: #aaa;
  }
</style>
