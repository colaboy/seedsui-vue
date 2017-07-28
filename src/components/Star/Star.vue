<template>
  <div @click="onClickStar">
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
  props: ['defaultStar'],
  data () {
    return {
      num: this.defaultStar
    }
  },
  methods: {
    onClickStar (e) {
      var target = e.target
      var num = target.getAttribute('data-num')
      if (num) {
        this.num = num
        this.$emit('callback', num)
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.star{
  font-family: 'iconfont' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;

  width: 36px;
  height: 36px;
  font-size: 36px;
  display: inline-block;
  background-size: cover;
  &:before{
    content: "\E94D";
  }
  &.active{
    content: "\E94E";
  }
}
</style>
