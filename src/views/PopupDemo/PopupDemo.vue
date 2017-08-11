<template>
<div>
  <Dialog ref="refPopover" position="top-right" animation="zoom" css="overflow:visible; top: 54px; right: 6px;">
    <Popover :list="[
    {icon:'icon-qrcode',text:'扫码签到'},
    {icon:'icon-chats',text:'会议群聊'},
    {icon:'icon-rdominus',text:'取消会议'},
    {icon:'icon-rdook',text:'结束会议'},
    {icon:'icon-rdoclose',text:'删除会议'}
    ]"/>
  </Dialog>

  <ShareBox ref="refSharebox" />

  <Alert text="提示框" :show="showAlert" :clickOk="onClickAlertOk"/>
  <Alert text="提示框" :show="showConfirm" :clickOk="onClickConfirmOk" :clickCancel="onClickConfirmCancel"/>
  <Toast text="提示框" :show="showToast" />

  <Dialog ref="refDialogLt" position="left" animation="slideRight">
    <div style="display:block;background-color: white;width: 200px;height: 100px;">left-top</div>
  </Dialog>
  <Dialog ref="refDialogLm" position="left-middle" animation="slideRight">
    <div style="display:block;background-color: white;width: 200px;height: 100px;">left-middle</div>
  </Dialog>
  <Dialog ref="refDialogLb" position="left-bottom" animation="slideRight">
    <div style="display:block;background-color: white;width: 200px;height: 100px;">left-bottom</div>
  </Dialog>
  <Dialog ref="refDialogLf" position="left-middle" animation="slideRight" css="height:100%">
    <div style="display:block;background-color: white;width: 200px;height: 100%;">left-middle</div>
  </Dialog>

  <Dialog ref="refDialogRt" position="right" animation="slideLeft">
    <div style="display:block;background-color: white;width: 200px;height: 100px;">right-top</div>
  </Dialog>
  <Dialog ref="refDialogRm" position="right-middle" animation="slideLeft">
    <div style="display:block;background-color: white;width: 200px;height: 100px;">right-middle</div>
  </Dialog>
  <Dialog ref="refDialogRb" position="right-bottom" animation="slideLeft">
    <div style="display:block;background-color: white;width: 200px;height: 100px;">right-bottom</div>
  </Dialog>
  <Dialog ref="refDialogRf" position="right-middle" animation="slideLeft" css="height:100%">
    <div style="display:block;background-color: white;width: 200px;height: 100%;">right-middle</div>
  </Dialog>

  <Dialog ref="refDialogTl" position="top" animation="zoom">
    <div style="display:block;background-color: white;width: 200px;height: 100px;">top-left</div>
  </Dialog>
  <Dialog ref="refDialogTc" position="top-center" animation="zoom">
    <div style="display:block;background-color: white;width: 200px;height: 100px;">top-center</div>
  </Dialog>
  <Dialog ref="refDialogTr" position="top-right" animation="zoom">
    <div style="display:block;background-color: white;width: 200px;height: 100px;">top-bottom</div>
  </Dialog>
  <Dialog ref="refDialogTf" position="top-center" animation="slideDown" css="width:100%;">
    <div style="display:block;background-color: white;width: 100%;height:100px;">top-center</div>
  </Dialog>

  <Dialog ref="refDialogBl" position="bottom" animation="zoom">
    <div style="display:block;background-color: white;width: 200px;height: 100px;">bottom-left</div>
  </Dialog>
  <Dialog ref="refDialogBc" position="bottom-center" animation="zoom">
    <div style="display:block;background-color: white;width: 200px;height: 100px;">bottom-center</div>
  </Dialog>
  <Dialog ref="refDialogBr" position="bottom-right" animation="zoom">
    <div style="display:block;background-color: white;width: 200px;height: 100px;">bottom-bottom</div>
  </Dialog>
  <Dialog ref="refDialogBf" position="bottom-center" animation="slideUp" css="width:100%;">
    <div style="display:block;background-color: white;width: 100%;height:100px;">bottom-center</div>
  </Dialog>

  <Dialog ref="refDialogM" position="middle" animation="fade">
    <div style="display:block;background-color: white;width: 200px;height:100px;">middle</div>
  </Dialog>
  
  <header>
    <Titlebar title="popup" :rBtn="[{icon:'icon-share',click:this.onClickBtnShare},{icon:'icon-menudot',click:this.onClickBtnMenu}]"/>
  </header>
  <article>
      <Card css="padding:10px 12px;">
    		<p class="color-primary" css="padding: 0 0 6px 0;">系统弹出框</p>
        <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnAlert" text="alert" />
        <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnConfirm" text="confirm" />
        <!-- <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnActionsheet" text="actionsheet" /> -->
        <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnToast" text="toast" />
        <!-- <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnPrompt" text="prompt" /> -->
      </Card>

      <Card css="padding:10px 12px;">
        <p class="color-primary" css="padding: 0 0 6px 0;">左弹出框</p>
        <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnLeftTop" text="left-top" />
        <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnLeftMiddle" text="left-middle" />
        <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnLeftBottom" text="left-bottom" />
        <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnLeftFull" text="left-full" />
    	</Card>
    	
    	<Card css="padding:10px 12px;">
    		<p class="color-primary" css="padding: 0 0 6px 0;">右弹出框</p>
			  <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnRightTop" text="right-top" />
	      <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnRightMiddle" text="right-middle" />
        <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnRightBottom" text="right-bottom" />
        <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnRightFull" text="right-full" />
    	</Card>

    	<Card css="padding:10px 12px;">
    		<p class="color-primary" css="padding: 0 0 6px 0;">上弹出框</p>
    		<Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnTopLeft" text="top-left" />
        <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnTopCenter" text="top-center" />
        <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnTopRight" text="top-right" />
        <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnTopFull" text="top-full" />
    	</Card>

    	<Card css="padding:10px 12px;">
    		<p class="color-primary" css="padding: 0 0 6px 0;">下弹出框</p>
    		<Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnBottomLeft" text="bottom-left" />
	      <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnBottomCenter" text="bottom-center" />
	      <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnBottomRight" text="bottom-right" />
	      <Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnBottomFull" text="bottom-full" />
    	</Card>

    	<Card css="padding:10px 12px;">
    		<p class="color-primary" css="padding: 0 0 6px 0;">中弹出框</p>
    		<Button css="padding:0 8px;margin:2px 0;" :click="onClickBtnMiddle" text="middle" />
    	</Card>
  </article>
</div>
</template>

<script>
export default {
  name: 'PopupDemo',
  data () {
    return {
      showAlert: false,
      showConfirm: false,
      showToast: false
    }
  },
  methods: {
    onClickBtnMenu () {
      this.$refs.refPopover.instance.show()
    },
    onClickBtnShare () {
      this.$refs.refSharebox.instance.show()
    },
    onClickBtnAlert () {
      this.showAlert = true
    },
    onClickAlertOk () {
      this.showAlert = false
    },
    onClickBtnConfirm () {
      this.showConfirm = true
    },
    onClickConfirmOk () {
      this.showConfirm = false
    },
    onClickConfirmCancel () {
      this.showConfirm = false
    },
    onClickBtnToast () {
      this.showToast = true
      setTimeout(() => {
        this.showToast = false
      }, 1000)
    },
    onClickBtnLeftTop () {
      this.$refs.refDialogLt.instance.show()
    },
    onClickBtnLeftMiddle () {
      this.$refs.refDialogLm.instance.show()
    },
    onClickBtnLeftBottom () {
      this.$refs.refDialogLb.instance.show()
    },
    onClickBtnLeftFull () {
      this.$refs.refDialogLf.instance.show()
    },
    onClickBtnRightTop () {
      this.$refs.refDialogRt.instance.show()
    },
    onClickBtnRightMiddle () {
      this.$refs.refDialogRm.instance.show()
    },
    onClickBtnRightBottom () {
      this.$refs.refDialogRb.instance.show()
    },
    onClickBtnRightFull () {
      this.$refs.refDialogRf.instance.show()
    },
    onClickBtnTopLeft () {
      this.$refs.refDialogTl.instance.show()
    },
    onClickBtnTopCenter () {
      this.$refs.refDialogTc.instance.show()
    },
    onClickBtnTopRight () {
      this.$refs.refDialogTr.instance.show()
    },
    onClickBtnTopFull () {
      this.$refs.refDialogTf.instance.show()
    },
    onClickBtnBottomLeft () {
      this.$refs.refDialogBl.instance.show()
    },
    onClickBtnBottomCenter () {
      this.$refs.refDialogBc.instance.show()
    },
    onClickBtnBottomRight () {
      this.$refs.refDialogBr.instance.show()
    },
    onClickBtnBottomFull () {
      this.$refs.refDialogBf.instance.show()
    },
    onClickBtnMiddle () {
      this.$refs.refDialogM.instance.show()
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/styles/variables.less";
</style>
