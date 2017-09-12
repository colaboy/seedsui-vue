<template>
<div class="page">
  <header class="header">
    <Titlebar title="card"/>
  </header>
  <article class="container">

  <Card>
    <p style="padding:8px;">内容内容</p>
    <div class="card-handler card-handler-bordered" data-col="3">
      <a>
        <i class="icon icon-thumb-fill size16"></i>
        <span>赞</span>
      </a>
      <a>
        <i class="icon icon-chatrect-fill size16"></i>
        <span>评论</span>
      </a>
      <a>
        <i class="icon icon-share-fill size16"></i>
        <span>分享</span>
      </a>
    </div>
  </Card>

  </article>
</div>
</template>

<script>
export default {
  name: 'CardDemo',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/styles/variables.less";
</style>
