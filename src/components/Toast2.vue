<template>
  <div :class="{ 'mask':true,'toast2-mask':true,'active':show,'toast2-cover':cover }">
    <div :class="{ 'toast2':true,'active':show }">
      <div class="toast2-wrapper">{{text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Toast2',
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
<style lang="less">
  @import "../assets/styles/variables.less";
  .toast2-cover{
    pointer-events:none;
  }
  .toast2-mask{
    background-color: transparent;
  }
  .toast2{
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
  .toast2-wrapper{
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
  .toast2-icon{
    background-size:cover;
    width:@px16;
    height:@px16;
    font-size: @px16;
    display:inline-block;
    vertical-align:middle;
  }
  .toast2-font{
    display:line-block;
    height: @px18;
    line-height: @px16;
    vertical-align:middle;
    margin-left:@px4;
  }
</style>