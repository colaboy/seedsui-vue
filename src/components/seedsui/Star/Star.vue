<template>
  <div @click.stop.prevent="onClickStar">
    <div :class="{ 'star':true,'active':num >= '1' }" data-num="1"></div>
    <div :class="{ 'star':true,'active':num >= '2' }" data-num="2"></div>
    <div :class="{ 'star':true,'active':num >= '3' }" data-num="3"></div>
    <div :class="{ 'star':true,'active':num >= '4' }" data-num="4"></div>
    <div :class="{ 'star':true,'active':num >= '5' }" data-num="5"></div>
  </div>
</template>
<script>
export default {
  name: 'Star',
  props: {
    change: {
      type: Function
    }
  },
  data () {
    return {
      num: this.default
    }
  },
  methods: {
    onClickStar (e) {
      var target = e.target
      var num = target.getAttribute('data-num')
      if (num) {
        this.num = num
        if (this.change) this.change(num)
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
  @import "star.less";
  @import "../seedsui-tool.less";
  .star::before{
    font-family: "iconfont";
    content: "\e94d";
    display: block;
  }
  .star.active::before{
    font-family: "iconfont";
    content: "\e94e";
    display: block;
  }
</style>
