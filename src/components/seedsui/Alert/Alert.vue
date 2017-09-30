<template>
  <div :class="'mask'+(show?' active':'')">
    <div :class="'alert'+(show?' active':'')">
      <div class="alert-content">{{text}}</div>
      <div class="alert-handler">
        <a v-if="clickCancel" @click="clickCancel">{{cancelText}}</a>
        <a @click="clickSubmit(...args)">{{submitText}}</a>
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
    submitText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
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
  @import "../../../assets/seedsui/seedsui-variables.less";
</style>
