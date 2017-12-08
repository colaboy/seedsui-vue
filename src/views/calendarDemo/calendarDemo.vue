<template>
<Page>
  <Header>
    <Titlebar title="calendar"></Titlebar>
  </Header>
  <Container>
    <Calendar/>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'calendarDemo',
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
