<template>
  <Mask1 :show="show" css="top:44px;overflow:hidden;" :click="clickMask">
    <div :class="'app-dropdownList'+(show?' active':'')">
      <div style="padding-left:0;margin-left:12px;" :class="'row wingpadding-md spacepadding-md underline'+isChecked(item,index)" v-for="(item,index) in list" :key="index" @click.stop.prevent="click(item,index)">
        <p class="col-flex">{{item.name}}</p>
        <i class="icon size20 icon-hook-fill"></i>
      </div>
    </div>
  </Mask1>
</template>
<script>
export default {
  name: 'DropFilter',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function
    },
    clickMask: {
      type: Function
    },
    checked: {
      type: Object
    }
  },
  data () {
    return {
      showFilter: true,
      list: [
        {
          id: '0',
          name: '全部',
          form_id: ''
        },
        {
          id: '1',
          name: '付费陈列检核',
          form_id: ''
        },
        {
          id: '2',
          name: '资产的检核',
          form_id: ''
        },
        {
          id: '3',
          name: '没有资产检核',
          form_id: ''
        }
      ]
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    isChecked (item, index) {
      if (this.checked && this.checked.id === item.id) {
        return ' active'
      }
      return ''
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/styles/variables.less";
  .app-dropdownList{
    position: absolute;
    top:0;
    width: 100%;
    background-color: white;
    -webkit-transition-property:-webkit-transform,opacity,visibility;
    -webkit-transition-duration:300ms;
    -webkit-transform-origin:center top;
    -webkit-transform:translate3d(0,-100%,0);
  }
  .app-dropdownList.active{
    -webkit-transform:none;
  }
  .row .icon{
    display:none;
  }
  .row.active{
    color: @primary-bg;
  }
  .row.active .icon{
    display: block;
  }
</style>
