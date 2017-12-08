<template>
<Page>
  <Header>
    <Titlebar title="Timeline"></Titlebar>
  </Header>
  <Container>
    <Group>
      <Timeline :list="timeList" top="20px" bottom="50px" css="padding: 0 0 0 18px;"/>
    </Group>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'timelineDemo',
  data () {
    return {
      timeList: [
        {
          active: true,
          icon: '<div class="dot active" style="width:10px;height:10px;border: 2px solid white"/>',
          content: '<div class="app-li border-b">' +
            '<div class="app-li-caption">已签收</div>' +
            '<div class="app-li-sndcaption">2017-07-07</div>' +
          '</div>'
        },
        {
          active: false,
          icon: '<div class="dot" style="width:10px;height:10px;border: 2px solid white"/>',
          content: '<div class="app-li border-b">' +
            '<div class="app-li-caption">已签收</div>' +
            '<div class="app-li-sndcaption">2017-07-07</div>' +
          '</div>'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less">
  @import "../../components/seedsui/core/seedsui-variables.less";
  .app-li {
    padding: 12px 0;
  }
  .app-li-caption{
    font-size: 16px;
  }
  .app-li-sndcaption{
    font-size: 14px;
    margin-top:8px;
  }
</style>
