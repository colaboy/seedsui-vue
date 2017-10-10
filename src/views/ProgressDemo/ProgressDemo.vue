<template>
<Page>
  <Header>
    <Titlebar title="progress"></Titlebar>
  </Header>
  <Container>
      
    <Group title="Progress Bar">
      <div class="progress-box">
        <Progress width="35%" color="#32d2ea" border="#36b0cf"/>
        <label class="progress-label">
          <span class="counter" data-duration="1000" data-to="35">0</span>
          <span>%</span>
        </label>
      </div>
      <div class="progress-box">
        <Progress width="35%" color="#6fb1ff" border="#439fd9"/>
        <label class="progress-label">
          <span class="counter" data-duration="1000" data-to="35">0</span>
          <span>%</span>
        </label>
      </div>
    </Group>

    <Group title="Progress threed" css="padding-bottom:1px;">
      <Progress css="margin:10px 12px;" theme="threed" width="35%" color="#32d2ea" border="#36b0cf"/>
      <Progress css="margin:10px 12px;" theme="threed" width="35%" color="#6fb1ff" border="#439fd9"/>
    </Group>

    <Group title="Progress Striped" css="padding-bottom:1px;">
      <Progress css="margin:10px 12px;" theme="striped" width="35%" color="#32d2ea" border="#36b0cf"/>
      <Progress css="margin:10px 12px;" theme="striped animated" width="35%" color="#6fb1ff" border="#439fd9"/>
    </Group>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'ClockDemo',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/seedsui-variables.less";
</style>
