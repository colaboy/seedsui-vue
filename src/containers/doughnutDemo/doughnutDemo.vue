<template>
<Page>
  <Header>
    <Titlebar title="doughnut"></Titlebar>
  </Header>
  <Container>
    <ul class="grid grid-bordered" data-col="4">
      <li style="padding: 16px 0">
        <Doughnut :delay="100" text="待审批" rotate="15" theme="yellow"/>
      </li>
      <li style="padding: 16px 0">
        <Doughnut :delay="100" text="准备中" rotate="45" theme="orange"/>
      </li>
      <li style="padding: 16px 0;">
        <Doughnut :delay="100" text="进行中" rotate="315" theme="green"/>
      </li>
      <li style="padding: 16px 0">
        <Doughnut :delay="100" text="已结束" rotate="360" theme="red"/>
      </li>
      <li style="padding: 16px 0">
        <Doughnut :delay="100" text="已取消" rotate="360" theme="gray"/>
      </li>
    </ul>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'doughnutDemo',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/core/seedsui-variables.less";
</style>
