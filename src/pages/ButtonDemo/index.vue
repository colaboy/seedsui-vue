<template>
<div>
  <header>
    <Titlebar title="button" back="true"></Titlebar>
  </header>
  <article>
      <Group title="普通按钮">
          <div style="line-height: 50px;padding: 4px 12px 8px 12px;">
              <Button text="默认" tipText="1"></Button>
              <Button text="禁用" tipText="1" disabled></Button>
              <Button text="禁用" badgeText="99+" buttonClass="primary"></Button>
              <Button text="提交" icon="icon-rdohook" buttonClass="submit"></Button>
              <Button text="取消" icon="icon-rdoclose" buttonClass="cancel"></Button>
              <Button text="信息" icon="icon-rdoinfo" buttonClass="info"></Button>
              <Button text="完成" buttonClass="success"></Button>
              <Button text="警告" buttonClass="warn"></Button>
          </div>
      </Group>

      <Group title="框形按钮">
          <div style="line-height: 50px;padding: 4px 12px 8px 12px;">
              <Button text="默认" tipText="1" buttonClass="outline"></Button>
              <Button text="禁用" tipText="1" disabled buttonClass="outline"></Button>
              <Button text="禁用" badgeText="99+" buttonClass="outline primary"></Button>
              <Button text="提交" icon="icon-rdohook" buttonClass="outline submit"></Button>
              <Button text="取消" icon="icon-rdoclose" buttonClass="outline cancel"></Button>
              <Button text="信息" icon="icon-rdoinfo" buttonClass="outline info"></Button>
              <Button text="完成" buttonClass="outline success"></Button>
              <Button text="警告" buttonClass="outline warn"></Button>
          </div>
      </Group>

      <Group title="白色按钮">
          <div style="line-height: 50px;padding: 4px 12px 8px 12px;margin-top:10px;" class="bg-primary">
              <Button text="白色按钮" buttonClass="white"></Button>
              <Button text="白色按钮" buttonClass="white outline"></Button>
          </div>
      </Group>

      <Group title="大按钮">
          <div style="line-height: 50px;padding: 4px 12px 8px 12px;">
              <Button buttonClass="block" text="按钮"></Button>
              <Button buttonClass="submit block" icon="icon-rdohook" text="提交" style="margin:8px 0;"></Button>
              <Button buttonClass="cancel block" icon="icon-rdoclose" text="取消" style="margin:8px 0;"></Button>
              <Button buttonClass="info block" icon="icon-rdoinfo" text="信息" style="margin:8px 0;"></Button>
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
