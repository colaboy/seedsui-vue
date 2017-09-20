<template>
  <div :class="'mask'+(show?' active':'')">
    <div :class="'alert'+(show?' active':'')">
      <div class="alert-content">{{text}}</div>
      <div class="alert-handler">
        <a v-if="clickCancel" @click="clickCancel">取消</a>
        <a @click="clickSubmit(...args)">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Alert',
  props: {
    args: {
      type: Array
    },
    text: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    clickSubmit: {
      type: Function
    },
    clickCancel: {
      type: Function
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../../assets/seedsui/styles/variables.less";
</style>
