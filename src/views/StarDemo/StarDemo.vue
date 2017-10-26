<template>
<Page>
  <Header>
    <Titlebar title="star"/>
  </Header>
  <Container>
    <Star :default="2" :change="onChangeStar"/>
    <span>{{star}}</span>
  </Container>
</Page>
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
  @import "../../components/seedsui/seedsui-variables.less";
</style>
