<template>
<Page>
  <Header>
    <Titlebar title="clock"></Titlebar>
  </Header>
  <Container>
    <Clock className="size80" time="08:30" :delay="100" css="margin: 20px auto;"/>
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
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/seedsui-variables.less";
</style>
