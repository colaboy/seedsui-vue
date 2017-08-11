<template>
  <div :class="'mask'+(show?' active':'')">
    <div :class="'alert'+(show?' active':'')">
      <div class="alert-content">{{text}}</div>
      <div class="alert-handler">
        <a v-if="clickCancel" @click="clickCancel">取消</a>
        <a @click="clickOk">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Alert',
  props: {
    text: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    clickOk: {
      type: Function
    },
    clickCancel: {
      type: Function
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/styles/variables.less";
  .alert{
    width: @300px;
  }
  .alert-content{
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    min-height: @100px;
    font-size: @16px;
  }
  .alert-content.active{
    .alert-content
  }
</style>
