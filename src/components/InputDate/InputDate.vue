<template>
<div>
  <DatePicker ref="_refDatePicker" :clickOk="onClickDatePickerOk"/>
  <input type="text" class="input-text" readOnly="true" ref="_refDate" placeholder="请选择日期" @click="onClickPicker"/>
</div>
</template>

<script>
export default {
  name: 'InputDate',
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    this.instance = this.$refs._refDatePicker.instance
    console.log(this.instance)
  },
  methods: {
    onClickPicker (e) {
      this.instance.show()
    },
    onClickDatePickerOk (e) {
      this.$refs._refDate.value = e.activeText
      e.hide()
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/styles/variables.less";
</style>
