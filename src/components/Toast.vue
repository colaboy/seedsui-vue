<template>
  <div :class="{ 'mask':true,'toast-mask':true,'active':show,'toast-cover':cover }">
    <div :class="{ 'toast':true,'active':show }">
      <div class="toast-wrapper">{{text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    text: {
      type: String,
      default: ''
    },
    cover: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../assets/styles/variables.less";
  .toast-cover{
    pointer-events:none;
  }
  .toast-mask{
    background-color: transparent;
  }
  .toast{
    position:fixed;
    width:100%;
    top:50%;
    -webkit-transform:translateY(-50%);
    text-align:center;
    pointer-events:none;
    opacity: 0;

    -webkit-transition-property:-webkit-transform,opacity,visibility;
    -webkit-transition-duration:150ms;
    -webkit-transition-timing-function:ease;

    font-size: 28px;

    z-index:999;

    &.active{
      opacity: 1;
    }
  }
  .toast-wrapper{
    min-width: 200px;
    min-height: 120px;

    display:-webkit-inline-box;
    -webkit-box-align:center;
    -webkit-box-pack:center;
    padding:@px10;
    border-radius:@px6;
    max-width:90%;
    max-height:@px35;
    line-height:@px20;
    overflow:hidden;
    text-align:left;

    color:white;
    background-color:@toast-bg;
  }
  .toast-icon{
    background-size:cover;
    width:@px16;
    height:@px16;
    font-size: @px16;
    display:inline-block;
    vertical-align:middle;
  }
  .toast-font{
    display:line-block;
    height: @px18;
    line-height: @px16;
    vertical-align:middle;
    margin-left:@px4;
  }
</style>
