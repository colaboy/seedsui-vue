<template>
<Page>
  <Header>
    <Titlebar title="grid"></Titlebar>
  </Header>
  <Container>
    <Group title="square">
      <Grid :list="list"/>
    </Group>
    <Group title="pure">
      <Grid type="pure" :list="list"/>
    </Group>
    <Group title="album">
      <Grid type="album" :list="list" :add="add"/>
    </Group>
    <Group title="pure bordered">
      <Grid type="pure" :bordered="true" :list="list"/>
    </Group>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'FormDemo',
  data () {
    return {
      add: true,
      list: [
        { img: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg', icon: 'icon-contact-fill', text: '通讯录', onClick: this.onClickContact },
        { img: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg', icon: 'icon-write-fill', text: '审批', onClick: this.onClickContact },
        { img: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg', icon: 'icon-position-fill', text: '定位', onClick: this.onClickPosition },
        { img: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg', icon: 'icon-gear-fill', text: '设置', onClick: this.onClickGear },
        { img: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg', icon: 'icon-folder-fill', text: '文档', onClick: this.onClickFolder },
        { img: 'http://pic.qjimage.com/bjisub001/high/bji0130_0089.jpg', icon: 'icon-chartpie-fill', text: '数据分析', onClick: this.onClickChartpie }
      ]
    }
  },
  methods: {
    onClickContact (e) {
      console.log('通讯录')
    },
    onClickWrite (e) {
      console.log('审批')
    },
    onClickPosition (e) {
      console.log('定位')
    },
    onClickGear (e) {
      console.log('设置')
    },
    onClickFolder (e) {
      console.log('文档')
    },
    onClickChartpie (e) {
      console.log('数据分析')
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/core/seedsui-variables.less";
</style>
