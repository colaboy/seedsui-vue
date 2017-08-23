<template>
<div>
  <header>
    <Titlebar title="star"/>
  </header>
  <article>
    <Star :default="2" :change="onChangeStar"/>
    <span>{{star}}</span>
  </article>
</div>
</template>

<script>
export default {
  name: 'StarDemo',
  data () {
    return {
      star: '0'
    }
  },
  methods: {
    onChangeStar (starNum) {
      this.star = '' + starNum
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/styles/variables.less";
</style>
