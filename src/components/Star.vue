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
  width: 36px;
  height: 36px;
  display: inline-block;
  background-size: cover;
  background-image: url("../assets/images/star.png");
  &.active{
    background-image: url("../assets/images/star-active.png");
  }
}
</style>
