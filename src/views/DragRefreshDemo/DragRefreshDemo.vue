<template>
<Page>
  <Header>
    <Titlebar title="下拉刷新"></Titlebar>
  </Header>
  <Container>
    <DragList :params="listParams"/>
  </Container>
</Page>
</template>

<script>
import DragList from './DragList.vue'
export default {
  name: 'dragRefreshDemo',
  components: {
    DragList
  },
  data () {
    return {
      listParams: {
        brand_id: '-1',
        class_id: '-1'
      }
    }
  },
  methods: {
    /* --------------------
    列表查询
    -------------------- */
    queryList () {
      /* if (this.listParams.brand_id === this.dropdownBrandChecked.id && this.listParams.class_id === this.dropdownClassChecked.id) {
        return
      }
      // 参数设置
      this.listParams = {
        brand_id: this.dropdownBrandChecked.id || '-1', // 品牌
        class_id: this.dropdownClassChecked.id || '-1' // 商品类型
      } */
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/core/seedsui-variables.less";
</style>
