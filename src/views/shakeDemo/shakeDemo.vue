<template>
<Page>
  <Header>
    <Titlebar title="shake"></Titlebar>
  </Header>
  <Container css="background-color:#888;color:white;" className="box box-middlecenter">
    <p ref="refShakeFont" style="font-size:20px;">摇一摇您的手机</p>
  </Container>
</Page>
</template>

<script>
import Animate from '@/utils/animate.js'
import EventUtil from '@/utils/eventutil.js'
export default {
  name: 'ShakeDemo',
  data () {
    return {
      shakeFont: null
    }
  },
  mounted () {
    this.shakeFont = this.$refs.refShakeFont
    EventUtil.addHandler(window, 'shake', this.onShook)
  },
  methods: {
    onShook () {
      Animate.one(this.shakeFont, 'shake animated')
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/seedsui-variables.less";
</style>
