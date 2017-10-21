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
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/seedsui/seedsui-variables.less";
</style>
