<template>
<Page>
  <Header>
    <Titlebar title="Row"></Titlebar>
  </Header>
  <Container>
    <div class="row">
      <div class="col-2">col-2</div>
      <div class="col-2">col-2</div>
      <div class="col-2">col-2</div>
      <div class="col-2">col-2</div>
      <div class="col-2">col-2</div>
      <div class="col-2">col-2</div>
    </div>
    <div class="row-flex">
      <div class="col-4">col-4</div>
      <div class="col-flex">col-flex</div>
    </div>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'FlexDemo',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/seedsui-variables.less";
  @import "../../components/seedsui/extend/border.less";
  [class ^= 'col-']:extend(.border-rb all){
    background-color: rgb(235, 235, 239);
    color: rgb(187, 187, 187);
    text-align: center;
    height: 30px;
    line-height: 30px;
    // border:1px solid #ddd;
  }
</style>
