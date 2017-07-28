<template>
<div>
  <header>
    <Titlebar title="mark" back="true"></Titlebar>
  </header>
  <article>
      <Group title="标签">
          <div style="padding: 10px 12px;">
              <Mark class="mark-info" text="info"></Mark>
              <Mark class="mark-success" text="success"></Mark>
              <Mark class="mark-cancel" text="cancel"></Mark>
              <Mark class="mark-warn">warn</Mark>
              <Mark class="mark-disable">disable</Mark>
          </div>
      </Group>

      <Group title="框形标签">
          <div style="padding: 10px 12px;">
              <Mark class="mark-info outline">info</Mark>
              <Mark class="mark-success outline">success</Mark>
              <Mark class="mark-cancel outline">cancel</Mark>
              <Mark class="mark-warn outline">warn</Mark>
              <Mark class="mark-disable outline">disable</Mark>
          </div>
      </Group>
  </article>
</div>
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
  @import "../../assets/styles/variables.less";
</style>
