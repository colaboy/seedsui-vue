<style lang="less" scoped>
  @import "../../../assets/seedsui/seedsui-variables.less";
  .app-full{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: @sub-color;
    background-color: @body-bg;
    z-index: 1;
  }
  .app-full img{
    width:120px;
  }
  .app-full p{
    margin-top: 20px;
  }
  .app-full .app-full-content{
    position: absolute;
    top:40%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    text-align: center;
  }
</style>
<template>
  <div class="app-full" v-if="show" :style="css">
    <div class="app-full-content" @click.stop.prevent="click">
      <i class="icon wq-icon-no-network" style="width:120px;height:120px;font-size:120px;"></i>
      <p>{{text}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NoData',
    components: {
    },
    props: {
      css: {
        type: String
      },
      text: {
        type: String,
        default: '无网络，点击重新加载'
      },
      show: {
        type: Boolean
      },
      click: {
        type: Function,
        default: function () {}
      }
    },
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
      onClickRefresh () {
      }
    }
  }
</script>
