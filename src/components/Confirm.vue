<template>
  <div :class="{ 'mask':true,'active':show }">
    <div :class="{ 'alert':true,'active':show }">
      <div class="alert-content">{{text}}</div>
      <div class="alert-handler">
        <a @click="onClickCancelHandler">取消</a>
        <a @click="onClickOkHandler">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Confirm',
  props: {
    text: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    onClickOk: {
      type: Function
    },
    onClickCancel: {
      type: Function
    }
  },
  data () {
    return {
      isShow: this.show
    }
  },
  methods: {
    onClickOkHandler (e) {
      // this.$emit('onClickOk', this)
      this.onClickOk(this)
    },
    onClickCancelHandler (e) {
      this.onClickCancel(this)
    }
  }
}
</script>
<style lang="less" scoped>
  .alert{
    width: 600px;
  }
  .alert-content{
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    min-height: 214px;
    font-size: 32px;
  }
  .alert-content.active{
    .alert-content
  }
</style>
