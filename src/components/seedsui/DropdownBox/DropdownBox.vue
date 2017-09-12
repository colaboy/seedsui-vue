<template>
  <div class="mask active" v-show="show">
    <div class="dropdownbox" :style="'top:'+top">
      <div class="dropdownbox-overflow">
        <slot></slot>
      </div>
      <footer class="box">
        <Button :click="clickReset" :block="true" text="重置" css="height:50px;"/>
        <Button :click="clickSubmit" :block="true" type="submit" text="确定" css="height:50px;"/>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DropdownBox',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '0'
    },
    clickReset: {
      type: Function
    },
    clickSubmit: {
      type: Function
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "../../../assets/seedsui/styles/variables.less";
  .mask{
    top:82px;
  }
  .dropdownbox{
    position:absolute;
    top:0;
    bottom:100px;
    left:0;
    right:0;
    background-color:white;
    z-index: 2;
  }
  .dropdownbox-overflow{
    position:absolute;
    top:0;
    bottom:50px;
    left:0;
    right:0;
    overflow:auto;
  }
</style>
