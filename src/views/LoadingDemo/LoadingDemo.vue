<template>
<Page>
  <Header>
    <Titlebar title="loading"></Titlebar>
  </Header>
  <Container>
    <Button text="填料环filling ring" type="block" css="margin:12px 10px;" :click="onClickFilling"></Button>
    <Button text="流光floating ray" type="block" css="margin:12px 10px;" :click="onClickFloating"></Button>
  </Container>
  <LoadingFilling :show="fillingShow" css="top:44px;"></LoadingFilling>
  <LoadingFloating :show="floatingShow" css="top:44px;"></LoadingFloating>
</Page>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      fillingShow: false,
      floatingShow: false
    }
  },
  methods: {
    onClickFloating (e) {
      this.fillingShow = true
      setTimeout(() => { this.fillingShow = false }, 2000)
    },
    onClickFilling (e) {
      this.floatingShow = true
      setTimeout(() => { this.floatingShow = false }, 2000)
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/seedsui-variables.less";
</style>
