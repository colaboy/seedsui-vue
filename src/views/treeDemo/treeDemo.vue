<template>
<Page>
  <Header>
    <Titlebar title="mark"></Titlebar>
  </Header>
  <Container>
      <Group title="标签">
          <div style="padding: 10px 12px;">
              <Mark type="info" text="info"></Mark>
              <Mark type="success" text="success"></Mark>
              <Mark type="cancel" text="cancel"></Mark>
              <Mark type="warn">warn</Mark>
              <Mark type="disable">disable</Mark>
          </div>
      </Group>

      <Group title="框形标签">
          <div style="padding: 10px 12px;">
              <Mark type="info outline">info</Mark>
              <Mark type="success outline">success</Mark>
              <Mark type="cancel outline">cancel</Mark>
              <Mark type="warn outline">warn</Mark>
              <Mark type="disable outline">disable</Mark>
          </div>
      </Group>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'ButtonDemo',
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
  @import "../../components/seedsui/core/seedsui-variables.less";
</style>
