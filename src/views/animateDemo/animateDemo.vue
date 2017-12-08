<template>
<Page>
  <Header>
    <Titlebar title="animate"></Titlebar>
  </Header>
  <Container>
    <Card css="margin:10px 12px;padding:10px;">
      <span>帧率: </span>
      <span>{{fps}}</span>
    </Card>
    <Button :onClick="onClickBtn" :args="['bounce animated']" text="bounce"/>
    <Button :onClick="onClickBtn" :args="['flash animated']" text="flash"/>
    <Button :onClick="onClickBtn" :args="['pulse animated']" text="pulse"/>
    <Button :onClick="onClickBtn" :args="['rubberBand animated']" text="rubberBand"/>
    <Button :onClick="onClickBtn" :args="['shake animated']" text="shake"/>
    <Button :onClick="onClickBtn" :args="['swing animated']" text="swing"/>
    <Button :onClick="onClickBtn" :args="['tada animated']" text="tada"/>
    <Button :onClick="onClickBtn" :args="['wobble animated']" text="wobble"/>
    <Button :onClick="onClickBtn" :args="['bounceIn animated']" text="bounceIn"/>
    <Button :onClick="onClickBtn" :args="['bounceInDown animated']" text="bounceInDown"/>
    <Button :onClick="onClickBtn" :args="['bounceInLeft animated']" text="bounceInLeft"/>
    <Button :onClick="onClickBtn" :args="['bounceInRight animated']" text="bounceInRight"/>
    <Button :onClick="onClickBtn" :args="['bounceInUp animated']" text="bounceInUp"/>
    <Button :onClick="onClickBtn" :args="['bounceOut animated']" text="bounceOut"/>
    <Button :onClick="onClickBtn" :args="['bounceOutDown animated']" text="bounceOutDown"/>
    <Button :onClick="onClickBtn" :args="['bounceOutLeft animated']" text="bounceOutLeft"/>
    <Button :onClick="onClickBtn" :args="['bounceOutRight animated']" text="bounceOutRight"/>
    <Button :onClick="onClickBtn" :args="['bounceOutUp animated']" text="bounceOutUp"/>
    <Button :onClick="onClickBtn" :args="['fadeIn animated']" text="fadeIn"/>
    <Button :onClick="onClickBtn" :args="['fadeInDown animated']" text="fadeInDown"/>
    <Button :onClick="onClickBtn" :args="['fadeInDownBig animated']" text="fadeInDownBig"/>
    <Button :onClick="onClickBtn" :args="['fadeInLeft animated']" text="fadeInLeft"/>
    <Button :onClick="onClickBtn" :args="['fadeInLeftBig animated']" text="fadeInLeftBig"/>
    <Button :onClick="onClickBtn" :args="['fadeInRightBig animated']" text="fadeInRightBig"/>
    <Button :onClick="onClickBtn" :args="['fadeInUp animated']" text="fadeInUp"/>
    <Button :onClick="onClickBtn" :args="['fadeInUpBig animated']" text="fadeInUpBig"/>
    <Button :onClick="onClickBtn" :args="['fadeOut animated']" text="fadeOut"/>
    <Button :onClick="onClickBtn" :args="['fadeOutDownBig animated']" text="fadeOutDownBig"/>
    <Button :onClick="onClickBtn" :args="['fadeOutLeft animated']" text="fadeOutLeft"/>
    <Button :onClick="onClickBtn" :args="['fadeOutLeftBig animated']" text="fadeOutLeftBig"/>
    <Button :onClick="onClickBtn" :args="['fadeOutRight animated']" text="fadeOutRight"/>
    <Button :onClick="onClickBtn" :args="['fadeOutRightBig animated']" text="fadeOutRightBig"/>
    <Button :onClick="onClickBtn" :args="['fadeOutUp animated']" text="fadeOutUp"/>
    <Button :onClick="onClickBtn" :args="['fadeOutUpBig animated']" text="fadeOutUpBig"/>
    <Button :onClick="onClickBtn" :args="['flip animated']" text="flip"/>
    <Button :onClick="onClickBtn" :args="['flipInX animated']" text="flipInX"/>
    <Button :onClick="onClickBtn" :args="['flipInY animated']" text="flipInY"/>
    <Button :onClick="onClickBtn" :args="['flipOutX animated']" text="flipOutX"/>
    <Button :onClick="onClickBtn" :args="['flipOutY animated']" text="flipOutY"/>
    <Button :onClick="onClickBtn" :args="['lightSpeedIn animated']" text="lightSpeedIn"/>
    <Button :onClick="onClickBtn" :args="['lightSpeedOut animated']" text="lightSpeedOut"/>
    <Button :onClick="onClickBtn" :args="['rotateIn animated']" text="rotateIn"/>
    <Button :onClick="onClickBtn" :args="['rotateInDownLeft animated']" text="rotateInDownLeft"/>
    <Button :onClick="onClickBtn" :args="['rotateInDownRight animated']" text="rotateInDownRight"/>
    <Button :onClick="onClickBtn" :args="['rotateInUpLeft animated']" text="rotateInUpLeft"/>
    <Button :onClick="onClickBtn" :args="['rotateInUpRight animated']" text="rotateInUpRight"/>
    <Button :onClick="onClickBtn" :args="['rotateOut animated']" text="rotateOut"/>
    <Button :onClick="onClickBtn" :args="['rotateOutDownLeft animated']" text="rotateOutDownLeft"/>
    <Button :onClick="onClickBtn" :args="['rotateOutDownRight animated']" text="rotateOutDownRight"/>
    <Button :onClick="onClickBtn" :args="['rotateOutUpLeft animated']" text="rotateOutUpLeft"/>
    <Button :onClick="onClickBtn" :args="['rotateOutUpRight animated']" text="rotateOutUpRight"/>
    <Button :onClick="onClickBtn" :args="['hinge animated']" text="hinge"/>
    <Button :onClick="onClickBtn" :args="['rollIn animated']" text="rollIn"/>
    <Button :onClick="onClickBtn" :args="['rollOut animated']" text="rollOut"/>
    <Button :onClick="onClickBtn" :args="['zoomIn animated']" text="zoomIn"/>
    <Button :onClick="onClickBtn" :args="['zoomInDown animated']" text="zoomInDown"/>
    <Button :onClick="onClickBtn" :args="['zoomInLeft animated']" text="zoomInLeft"/>
    <Button :onClick="onClickBtn" :args="['zoomInRight animated']" text="zoomInRight"/>
    <Button :onClick="onClickBtn" :args="['zoomInUp animated']" text="zoomInUp"/>
    <Button :onClick="onClickBtn" :args="['zoomOut animated']" text="zoomOut"/>
    <Button :onClick="onClickBtn" :args="['zoomOutDown animated']" text="zoomOutDown"/>
    <Button :onClick="onClickBtn" :args="['zoomOutLeft animated']" text="zoomOutLeft"/>
    <Button :onClick="onClickBtn" :args="['zoomOutRight animated']" text="zoomOutRight"/>
    <Button :onClick="onClickBtn" :args="['zoomOutUp animated']" text="zoomOutUp"/>
  </Container>
</Page>
</template>

<script>
import Animate from '@/utils/animate.js'
export default {
  name: 'animateDemo',
  data () {
    return {
      fps: ''
    }
  },
  mounted () {
    Animate.fps((fps) => {
      console.log(fps)
      this.fps = fps
    })
  },
  methods: {
    onClickBtn (e, aniClass) {
      Animate.one(e.currentTarget, aniClass)
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/core/seedsui-variables.less";
  .button {
    width:40%;
    margin:8px 4%;
  }
</style>
