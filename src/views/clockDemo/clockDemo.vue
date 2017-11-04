<template>
<Page>
  <Header>
    <Titlebar title="clock"></Titlebar>
  </Header>
  <Container>
    <Clock classname="size80" time="12:15" :delay="100" css="margin: 20px auto;"/>
    <Clock time="12:15" :delay="100" css="margin: 20px auto;" color="#ff8800"/>
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
  @import "../../components/seedsui/seedsui-variables.less";
</style>
