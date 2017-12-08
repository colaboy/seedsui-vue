<template>
<Page>
  <Header>
    <Titlebar title="counter"></Titlebar>
  </Header>
  <Container>
    <Counter :from="1" :to="5" :duration="5000"/>
    <Counter :from="1" :to="5000" :duration="5000"/>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'counterDemo',
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
