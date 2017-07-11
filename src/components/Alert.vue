<template>
  <div :class="{ 'mask':true,'active':show }">
    <div :class="{ 'alert':true,'active':show }">
      <div class="alert-content">{{text}}</div>
      <div class="alert-handler">
        <a @click="onClickHandler">确定</a>
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
    onClickOk: {
      type: Function
    }
  },
  data () {
    return {
      isShow: this.show
    }
  },
  methods: {
    onClickHandler (e) {
      // this.$emit('onClickOk', this)
      this.onClickOk(this)
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
