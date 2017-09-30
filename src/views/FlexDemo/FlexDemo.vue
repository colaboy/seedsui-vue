<template>
<Page>
  <Header>
    <Titlebar>
      <Tabbar type="rect" :list="tabbar" :activeIndex="tabbarActive" css="width:200px;"></Tabbar>
    </Titlebar>
  </Header>
  <Container>
    <Carrousel ref="refCarrousel" pagination="" :page="2" css="height:100%" :change="onSlideChangeEnd">
      <!--第一页:start-->
      <section slot="carrousel-1" class="scrollContainer">
        <!--第一页:start-->
        <div class="sliver">
          box布局(兼容android4.0及以上)
        </div>
        <p>box-left</p>
        <div class="box box-left" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>
        <p>box-center</p>
        <div class="box box-center" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>

        <p>box-right</p>
        <div class="box box-right" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>

        <p>box-top</p>
        <div class="box box-top" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>

        <p>box-middle</p>
        <div class="box box-middle" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>

        <p>box-bottom</p>
        <div class="box box-bottom" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>

        <p>box-middlecenter</p>
        <div class="box box-middlecenter" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>

        <p>box-vertical</p>
        <div class="box box-vertical" id="box">
          <div class="case" style="background-color:coral;"></div>
          <div class="case" style="background-color:lightblue;"></div>
          <div class="case" style="background-color:khaki;"></div>
          <div class="case" style="background-color:pink;"></div>
          <div class="case" style="background-color:lightgrey;"></div>
          <div class="case" style="background-color:lightgreen;"></div>
        </div>

        <p>box-horizontal</p>
        <div class="box box-horizontal" id="box">
          <div class="case" style="background-color:coral;"></div>
          <div class="case" style="background-color:lightblue;"></div>
          <div class="case" style="background-color:khaki;"></div>
          <div class="case" style="background-color:pink;"></div>
          <div class="case" style="background-color:lightgrey;"></div>
          <div class="case" style="background-color:lightgreen;"></div>
        </div>
        <!--第一页:end-->
      </section>
      <!--第二页:start-->
      <section slot="carrousel-2" class="scrollContainer">
        <!--第二页:start-->
        <div class="sliver">
          flex布局(功能过新，兼容性不好)
        </div>

        <p>flex-shrink</p>
        <div style="width:210px;overflow:auto;margin:8px auto;">
          <div class="flex flex-shrink anim-move">
            <div style="background-color:coral;height:100px;"></div>
            <div style="background-color:lightblue;"></div>
            <div style="background-color:khaki;"></div>
            <div style="background-color:pink;"></div>
            <div style="background-color:lightgrey;"></div>
            <div style="background-color:lightgreen;"></div>
          </div>
        </div>

        <p>flex-left</p>
        <div class="flex flex-left" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>
        <p>flex-center</p>
        <div class="flex flex-center" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>

        <p>flex-right</p>
        <div class="flex flex-right" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>

        <p>flex-top</p>
        <div class="flex flex-top" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>

        <p>flex-middle</p>
        <div class="flex flex-middle" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>

        <p>flex-bottom</p>
        <div class="flex flex-bottom" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>

        <p>flex-middlecenter</p>
        <div class="flex flex-middlecenter" id="box">
          <div class="case" style="background-color:coral;"></div>
        </div>

        <p>flex-vertical</p>
        <div class="flex flex-vertical" id="box">
          <div class="case" style="background-color:coral;"></div>
          <div class="case" style="background-color:lightblue;"></div>
          <div class="case" style="background-color:khaki;"></div>
          <div class="case" style="background-color:pink;"></div>
          <div class="case" style="background-color:lightgrey;"></div>
          <div class="case" style="background-color:lightgreen;"></div>
        </div>
        <p>flex-vertical-reverse</p>
        <div class="flex flex-vertical-reverse" id="box">
          <div class="case" style="background-color:coral;"></div>
          <div class="case" style="background-color:lightblue;"></div>
          <div class="case" style="background-color:khaki;"></div>
          <div class="case" style="background-color:pink;"></div>
          <div class="case" style="background-color:lightgrey;"></div>
          <div class="case" style="background-color:lightgreen;"></div>
        </div>

        <p>flex-horizontal</p>
        <div class="flex flex-horizontal" id="box">
          <div class="case" style="background-color:coral;"></div>
          <div class="case" style="background-color:lightblue;"></div>
          <div class="case" style="background-color:khaki;"></div>
          <div class="case" style="background-color:pink;"></div>
          <div class="case" style="background-color:lightgrey;"></div>
          <div class="case" style="background-color:lightgreen;"></div>
        </div>
        <p>flex-horizontal-reverse</p>
        <div class="flex flex-horizontal-reverse" id="box">
          <div class="case" style="background-color:coral;"></div>
          <div class="case" style="background-color:lightblue;"></div>
          <div class="case" style="background-color:khaki;"></div>
          <div class="case" style="background-color:pink;"></div>
          <div class="case" style="background-color:lightgrey;"></div>
          <div class="case" style="background-color:lightgreen;"></div>
        </div>

        <p>flex-between</p>
        <div class="flex flex-between" id="box">
          <div class="case" style="background-color:coral;"></div>
          <div class="case" style="background-color:lightblue;"></div>
        </div>
        <p>flex-around</p>
        <div class="flex flex-around" id="box">
          <div class="case" style="background-color:coral;"></div>
          <div class="case" style="background-color:lightblue;"></div>
        </div>
        <p>flex-vertical-stretch</p>
        <div class="flex flex-vertical-stretch" id="box">
          <div class="case" style="background-color:coral;height: auto;"></div>
          <div class="case" style="background-color:lightblue;height: auto;"></div>
        </div>
        <!--第二页:end-->
      </section>
    </Carrousel>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'CarrouselPageDemo',
  data () {
    return {
      tabbarActive: 0,
      tabbar: [
        {
          text: 'box布局',
          click: this.onClickTabbar
        },
        {
          text: 'flex布局',
          click: this.onClickTabbar
        }
      ]
    }
  },
  methods: {
    onSlideChangeEnd (e) {
      this.tabbarActive = e.activeIndex
    },
    onClickTabbar (item, index) {
      this.tabbarActive = index
      this.$refs.refCarrousel.instance.slideTo(index)
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/seedsui-variables.less";
  .scrollContainer {
    overflow:hidden;width:100%;height:100%;overflow:auto;position:relative;
  }
  #row {
    width: 100%;
    background-color: #fff;
    margin: 10px 0;
  }
  #box {
    width: 210px;
    height: 210px;
    margin: 10px auto;
    background-color: #fff;
    overflow: hidden;
  }
  .case {
    width: 70px;
    height: 70px;
  }
  p {
    margin-top: 20px;
    text-align: center;
  }
  .anim-move {
    -webkit-animation: animmove 5s linear;
    -webkit-animation-fill-mode: forwards;
  }
  @-webkit-keyframes animmove {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-1050px);
    }
  }

</style>
