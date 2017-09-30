<template>
<Page>
  <Header>
    <Titlebar title="Space"></Titlebar>
  </Header>
  <Container>
    <div class="wingmargin-lg spacemargin-lg">wingmargin-lg | spacemargin-lg</div>
    <div class="wingmargin-md spacemargin-md">wingmargin-md | spacemargin-md</div>
    <div class="wingmargin-sm spacemargin-sm">wingmargin-sm | spacemargin-sm</div>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'ButtonDemo',
  data () {
    return {
      fadShow: false,
      spinShow: false
    }
  },
  methods: {
    onClickFadHandler (e) {
      this.fadShow = true
      setTimeout(() => { this.fadShow = false }, 2000)
    },
    onClickSpinHandler (e) {
      this.spinShow = true
      setTimeout(() => { this.spinShow = false }, 2000)
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/seedsui-variables.less";
  div{
    background-color: rgb(235, 235, 239);
    color: rgb(187, 187, 187);
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
</style>
