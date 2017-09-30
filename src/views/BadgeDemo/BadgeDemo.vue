<template>
<Page>
  <Header>
    <Titlebar title="badge"></Titlebar>
  </Header>
  <Container>
      <Group title="badge">
          <div class="peg-content">
              <Badge text="badge"></Badge>
          </div>
      </Group>

      <Group title="tip">
          <div class="peg-content">
            <Tip text="tip"></Tip>
          </div>
      </Group>

      <Group title="dot">
          <div class="peg-content">
              <Dot></Dot>
          </div>
      </Group>

      <Group title="close">
          <div class="peg-content">
              <Close></Close>
          </div>
      </Group>

      <Group title="peg">
          <div class="peg-content">
              <Peg></Peg>
          </div>
      </Group>

      <Group title="sticker">
          <div style="position:relative;height:50px;line-height: 50px;">
              <Sticker>
                <span class="size12 icon-fav-fill"></span>
              </Sticker>
          </div>
      </Group>

      <Group title="tagline">
          <div style="position:relative;padding: 8px;overflow:hidden;height: 100px;">
              <Tagline><span>tagline</span></Tagline>
          </div>
      </Group>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'BadgeDemo',
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
  .peg-content{
      text-align:center;padding: 10px 12px;
  }
</style>
