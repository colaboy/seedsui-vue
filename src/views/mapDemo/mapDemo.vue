<template>
  <Page>
    <Header>
      <Titlebar title="mark"></Titlebar>
    </Header>
    <Container>
      <div ref="refMapContainer" id="allmap" style="height: 100%;"></div>
    </Container>
  </Page>
</template>

<script>
  import BaiduMap from '@/utils/baidumap.js'
  export default {
    name: 'mapDemo',
    data () {
      return {
        mapContainer: null
      }
    },
    mounted () {
      this.mapContainer = this.$refs.refMapContainer
      this.renderMap()
    },
    methods: {
      renderMap () {
        // 定义坐标和文字
        /* var markerPeople = [
          [116.417854, 39.921988, '<span class="color-1 bold">蔡宇阳</span>&nbsp;早上8点<br>签到地址：北京市东城区王府井大街88号乐天银泰百货', '<label class="pin-label">阳</label>', '#53c6fd'],
          [116.406605, 39.921585, '<span class="color-2 bold">成少波</span>&nbsp;早上8点<br>签到地址：北京市东城区东华门大街', '<label class="pin-label">波</label>', '#ffae02'],
          [116.412222, 39.912345, '<span class="color-3 bold">李进</span>&nbsp;早上8点<br>签到地址：北京市东城区正义路甲5号', '<label class="pin-label">进</label>', '#3ae3ea']
        ] */
        /* var markerPerson = [
          [116.417854, 39.921988, '<span class="color-1 bold">蔡宇阳</span>&nbsp;早上8点<br>签到地址：北京市东城区王府井大街88号乐天银泰百货', '<label class="pin-label">1</label>', '#53c6fd'],
          [116.406605, 39.921585, '<span class="color-1 bold">蔡宇阳</span>&nbsp;早上8点<br>签到地址：北京市东城区东华门大街', '<label class="pin-label">2</label>', '#53c6fd']
        ] */
        // 初始化地图
        setTimeout(() => {
          BaiduMap.mapById('allmap')
        }, 1000)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/seedsui/seedsui-variables.less";
</style>
