<template>
<Page>
  <Header>
    <Titlebar title="gauge"></Titlebar>
  </Header>
  <Container>
    <Gauge :delay="100" :min="0" :max="100" :current="20"/>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'gaugeDemo',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/seedsui-variables.less";
</style>
