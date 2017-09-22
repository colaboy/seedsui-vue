<template>
<div class="page">
  <header class="header">
    <Titlebar title="button"></Titlebar>
  </header>
  <article class="container">
      <Group title="普通按钮">
          <div style="line-height: 50px;padding: 4px 12px 8px 12px;">
              <Button text="默认" tipText="1"></Button>
              <Button text="禁用" tipText="1" type="disabled"></Button>
              <Button text="禁用" badgeText="99+" type="primary"></Button>
              <Button text="提交" icon="icon-rdohook" type="submit"></Button>
              <Button text="取消" icon="icon-rdoclose" type="cancel"></Button>
              <Button text="信息" icon="icon-rdoinfo" type="info"></Button>
              <Button text="完成" type="success"></Button>
              <Button text="警告" type="warn"></Button>
          </div>
      </Group>

      <Group title="框形按钮">
          <div style="line-height: 50px;padding: 4px 12px 8px 12px;">
              <Button text="默认" tipText="1" type="outline"></Button>
              <Button text="禁用" tipText="1" disabled type="outline"></Button>
              <Button text="禁用" badgeText="99+" type="outline primary"></Button>
              <Button text="提交" icon="icon-rdohook" type="outline submit"></Button>
              <Button text="取消" icon="icon-rdoclose" type="outline cancel"></Button>
              <Button text="信息" icon="icon-rdoinfo" type="outline info"></Button>
              <Button text="完成" type="outline success"></Button>
              <Button text="警告" type="outline warn"></Button>
          </div>
      </Group>

      <Group title="白色按钮">
          <div style="line-height: 50px;padding: 4px 12px 8px 12px;margin-top:10px;" class="bg-primary">
              <Button text="白色按钮" type="white"></Button>
              <Button text="白色按钮" type="white outline"></Button>
          </div>
      </Group>

      <Group title="大按钮">
          <div style="line-height: 50px;padding: 4px 12px 8px 12px;">
              <Button type="block" text="按钮"></Button>
              <Button type="submit block" icon="icon-rdohook" text="提交" style="margin:8px 0;"></Button>
              <Button type="cancel block" icon="icon-rdoclose" text="取消" style="margin:8px 0;"></Button>
              <Button type="info block" icon="icon-rdoinfo" text="信息" style="margin:8px 0;"></Button>
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
  @import "../../assets/seedsui/styles/variables.less";
</style>
