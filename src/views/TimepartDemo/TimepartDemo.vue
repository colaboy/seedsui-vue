<template>
<Page>
  <Header>
    <Titlebar title="timepart"></Titlebar>
  </Header>
  <Container>
    <Timepart ref="refTimepart" :error="onTimepartError" classname="border-b"/>
    <Button :block="true" text="禁用到当前时间" css="margin:10px 12px" :click="onClickDisable"/>
    <Button :block="true" text="禁用17:00到18:00" css="margin:10px 12px" :click="onClickDisableCustom"/>
    <Button :block="true" text="选中9:10到12:10" css="margin:10px 12px" :click="onClickActive"/>
    <Button :block="true" text="提交" css="margin:10px 12px" :click="onClickSubmit"/>
    <Button :block="true" text="重置" css="margin:10px 12px" :click="onClickReset"/>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'timepartDemo',
  data () {
    return {
      timepart: null
    }
  },
  mounted () {
    this.timepart = this.$refs.refTimepart.instance
  },
  methods: {
    onTimepartError (msg, target) {
      console.log(msg)
    },
    onClickDisable () {
      this.timepart.disableTimes(null, new Date())
    },
    onClickDisableCustom () {
      this.timepart.disableTimes('17:10', '18:10')
    },
    onClickActive () {
      var data = JSON.stringify({startTime: '3:00', endTime: '5:00'})
      this.timepart.chooseTimes('9:10', '12:10', ['active'], data)
    },
    onClickSubmit () {
      var times = this.timepart.getActiveTimes()
      var starttime = times.startTimeString
      var endtime = times.endTimeString
      console.log('选中时间：' + starttime + ' ~ ' + endtime)
    },
    onClickReset () {
      this.timepart.reset()
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/seedsui-variables.less";
</style>
