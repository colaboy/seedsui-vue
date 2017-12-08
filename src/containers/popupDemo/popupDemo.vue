<template>
<Page>
  <Alert text="提示框" :show="alertShow" :onClickSubmit="onAlertSubmit"/>
  <Alert text="对话框" :show="confirmShow" :onClickSubmit="onConfirmSubmit" :onClickCancel="onConfirmCancel"/>
  <Toast :mask="true" :text="toastText" :show="toastShow" />
  <Prompt :mask="true" :text="promptText" :show="promptShow" />

  <Dialog ref="refPopover" position="top-right" animation="zoom" css="overflow:visible; top: 54px; right: 6px;">
    <Popover :list="[
    {icon:'icon-qrcode',text:'扫码签到', onClick:onClickDecode},
    {icon:'icon-chats',text:'会议群聊'},
    {icon:'icon-rdominus',text:'取消会议'},
    {icon:'icon-rdook',text:'结束会议'},
    {icon:'icon-rdoclose',text:'删除会议'}
    ]"/>
  </Dialog>

  <ShareBox ref="refSharebox" />

  <Actionsheet ref="refActionsheet" :show="showActionsheet" :list="[
    {text:'菜单一'},
    {text:'菜单二'},
    {text:'自定义退出', onClick:onClickCustomExit}
  ]"/>

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
  <DropFilter :show="dropFilterShow" :checked="dropFilterChecked" :onClickMask="onClickDropFilterMask" :onClick="onClickDropFilterList"/>
  
  <Header>
    <Titlebar title="popup<i class='shape-triangle-up'></i>" :onClick="onClickDropFilter" :rBtn="[{icon:'icon-share', onClick:this.onClickBtnShare},{icon:'icon-menudot', onClick:this.onClickBtnMenu}]"/>
  </Header>
  <Container>
      <Card css="padding:10px 12px;">
    		<p class="color-primary" css="padding: 0 0 6px 0;">系统弹出框</p>
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnAlert" text="alert" />
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnConfirm" text="confirm" />
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnActionsheet" text="actionsheet" />
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickToast" :args="['提示框']" text="toast" />
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickPrompt" :args="['提示框']" text="prompt" />
      </Card>

      <Card css="padding:10px 12px;">
        <p class="color-primary" css="padding: 0 0 6px 0;">左弹出框</p>
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnLeftTop" text="left-top" />
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnLeftMiddle" text="left-middle" />
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnLeftBottom" text="left-bottom" />
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnLeftFull" text="left-full" />
    	</Card>
    	
    	<Card css="padding:10px 12px;">
    		<p class="color-primary" css="padding: 0 0 6px 0;">右弹出框</p>
			  <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnRightTop" text="right-top" />
	      <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnRightMiddle" text="right-middle" />
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnRightBottom" text="right-bottom" />
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnRightFull" text="right-full" />
    	</Card>

    	<Card css="padding:10px 12px;">
    		<p class="color-primary" css="padding: 0 0 6px 0;">上弹出框</p>
    		<Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnTopLeft" text="top-left" />
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnTopCenter" text="top-center" />
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnTopRight" text="top-right" />
        <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnTopFull" text="top-full" />
    	</Card>

    	<Card css="padding:10px 12px;">
    		<p class="color-primary" css="padding: 0 0 6px 0;">下弹出框</p>
    		<Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnBottomLeft" text="bottom-left" />
	      <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnBottomCenter" text="bottom-center" />
	      <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnBottomRight" text="bottom-right" />
	      <Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnBottomFull" text="bottom-full" />
    	</Card>

    	<Card css="padding:10px 12px;">
    		<p class="color-primary" css="padding: 0 0 6px 0;">中弹出框</p>
    		<Button css="padding:0 8px;margin:2px 0;" :onClick="onClickBtnMiddle" text="middle" />
    	</Card>
  </Container>
</Page>
</template>

<script>
import DropFilter from './DropFilter'
export default {
  name: 'PopupDemo',
  components: {
    DropFilter
  },
  data () {
    return {
      alertShow: false,
      confirmShow: false,
      showActionsheet: false,
      toastShow: false,
      toastText: '',
      promptShow: false,
      promptText: '',
      dropFilterShow: false,
      dropFilterChecked: {
        id: '0',
        name: '全部'
      }
    }
  },
  methods: {
    onClickBtnMenu () {
      this.$refs.refPopover.instance.show()
    },
    onClickDecode () {
      console.log('扫码')
    },
    onClickCustomExit () {
      console.log('退出')
    },
    onClickBtnShare () {
      this.$refs.refSharebox.instance.show()
    },
    onClickBtnAlert () {
      this.alertShow = true
    },
    onAlertSubmit () {
      console.log('点击alert确定')
      this.alertShow = false
    },
    onClickBtnConfirm () {
      this.confirmShow = true
    },
    onConfirmSubmit () {
      this.confirmShow = false
    },
    onConfirmCancel () {
      this.confirmShow = false
    },
    onClickToast (e, text) {
      this.toast(text)
    },
    toast (text) {
      this.toastText = text
      this.toastShow = true
      setTimeout(() => {
        this.toastShow = false
      }, 1000)
    },
    onClickPrompt (e, text) {
      this.prompt(text)
    },
    prompt (text) {
      this.promptText = text
      this.promptShow = true
      setTimeout(() => {
        this.promptShow = false
      }, 1000)
    },
    onClickBtnActionsheet () {
      this.$refs.refActionsheet.instance.show()
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
    },
    // 点击核验
    onClickDropFilter () {
      this.dropFilterShow = !this.dropFilterShow
    },
    // 点击核验列表
    onClickDropFilterList (item) {
      this.dropFilterChecked = item
      this.dropFilterShow = false
    },
    // 点击核验遮罩
    onClickDropFilterMask () {
      this.dropFilterShow = false
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/core/seedsui-variables.less";
</style>
