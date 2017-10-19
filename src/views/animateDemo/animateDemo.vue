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
    <Button :click="onClickBtn" :args="['bounce animated']" text="bounce"/>
    <Button :click="onClickBtn" :args="['flash animated']" text="flash"/>
    <Button :click="onClickBtn" :args="['pulse animated']" text="pulse"/>
    <Button :click="onClickBtn" :args="['rubberBand animated']" text="rubberBand"/>
    <Button :click="onClickBtn" :args="['shake animated']" text="shake"/>
    <Button :click="onClickBtn" :args="['swing animated']" text="swing"/>
    <Button :click="onClickBtn" :args="['tada animated']" text="tada"/>
    <Button :click="onClickBtn" :args="['wobble animated']" text="wobble"/>
    <Button :click="onClickBtn" :args="['bounceIn animated']" text="bounceIn"/>
    <Button :click="onClickBtn" :args="['bounceInDown animated']" text="bounceInDown"/>
    <Button :click="onClickBtn" :args="['bounceInLeft animated']" text="bounceInLeft"/>
    <Button :click="onClickBtn" :args="['bounceInRight animated']" text="bounceInRight"/>
    <Button :click="onClickBtn" :args="['bounceInUp animated']" text="bounceInUp"/>
    <Button :click="onClickBtn" :args="['bounceOut animated']" text="bounceOut"/>
    <Button :click="onClickBtn" :args="['bounceOutDown animated']" text="bounceOutDown"/>
    <Button :click="onClickBtn" :args="['bounceOutLeft animated']" text="bounceOutLeft"/>
    <Button :click="onClickBtn" :args="['bounceOutRight animated']" text="bounceOutRight"/>
    <Button :click="onClickBtn" :args="['bounceOutUp animated']" text="bounceOutUp"/>
    <Button :click="onClickBtn" :args="['fadeIn animated']" text="fadeIn"/>
    <Button :click="onClickBtn" :args="['fadeInDown animated']" text="fadeInDown"/>
    <Button :click="onClickBtn" :args="['fadeInDownBig animated']" text="fadeInDownBig"/>
    <Button :click="onClickBtn" :args="['fadeInLeft animated']" text="fadeInLeft"/>
    <Button :click="onClickBtn" :args="['fadeInLeftBig animated']" text="fadeInLeftBig"/>
    <Button :click="onClickBtn" :args="['fadeInRightBig animated']" text="fadeInRightBig"/>
    <Button :click="onClickBtn" :args="['fadeInUp animated']" text="fadeInUp"/>
    <Button :click="onClickBtn" :args="['fadeInUpBig animated']" text="fadeInUpBig"/>
    <Button :click="onClickBtn" :args="['fadeOut animated']" text="fadeOut"/>
    <Button :click="onClickBtn" :args="['fadeOutDownBig animated']" text="fadeOutDownBig"/>
    <Button :click="onClickBtn" :args="['fadeOutLeft animated']" text="fadeOutLeft"/>
    <Button :click="onClickBtn" :args="['fadeOutLeftBig animated']" text="fadeOutLeftBig"/>
    <Button :click="onClickBtn" :args="['fadeOutRight animated']" text="fadeOutRight"/>
    <Button :click="onClickBtn" :args="['fadeOutRightBig animated']" text="fadeOutRightBig"/>
    <Button :click="onClickBtn" :args="['fadeOutUp animated']" text="fadeOutUp"/>
    <Button :click="onClickBtn" :args="['fadeOutUpBig animated']" text="fadeOutUpBig"/>
    <Button :click="onClickBtn" :args="['flip animated']" text="flip"/>
    <Button :click="onClickBtn" :args="['flipInX animated']" text="flipInX"/>
    <Button :click="onClickBtn" :args="['flipInY animated']" text="flipInY"/>
    <Button :click="onClickBtn" :args="['flipOutX animated']" text="flipOutX"/>
    <Button :click="onClickBtn" :args="['flipOutY animated']" text="flipOutY"/>
    <Button :click="onClickBtn" :args="['lightSpeedIn animated']" text="lightSpeedIn"/>
    <Button :click="onClickBtn" :args="['lightSpeedOut animated']" text="lightSpeedOut"/>
    <Button :click="onClickBtn" :args="['rotateIn animated']" text="rotateIn"/>
    <Button :click="onClickBtn" :args="['rotateInDownLeft animated']" text="rotateInDownLeft"/>
    <Button :click="onClickBtn" :args="['rotateInDownRight animated']" text="rotateInDownRight"/>
    <Button :click="onClickBtn" :args="['rotateInUpLeft animated']" text="rotateInUpLeft"/>
    <Button :click="onClickBtn" :args="['rotateInUpRight animated']" text="rotateInUpRight"/>
    <Button :click="onClickBtn" :args="['rotateOut animated']" text="rotateOut"/>
    <Button :click="onClickBtn" :args="['rotateOutDownLeft animated']" text="rotateOutDownLeft"/>
    <Button :click="onClickBtn" :args="['rotateOutDownRight animated']" text="rotateOutDownRight"/>
    <Button :click="onClickBtn" :args="['rotateOutUpLeft animated']" text="rotateOutUpLeft"/>
    <Button :click="onClickBtn" :args="['rotateOutUpRight animated']" text="rotateOutUpRight"/>
    <Button :click="onClickBtn" :args="['hinge animated']" text="hinge"/>
    <Button :click="onClickBtn" :args="['rollIn animated']" text="rollIn"/>
    <Button :click="onClickBtn" :args="['rollOut animated']" text="rollOut"/>
    <Button :click="onClickBtn" :args="['zoomIn animated']" text="zoomIn"/>
    <Button :click="onClickBtn" :args="['zoomInDown animated']" text="zoomInDown"/>
    <Button :click="onClickBtn" :args="['zoomInLeft animated']" text="zoomInLeft"/>
    <Button :click="onClickBtn" :args="['zoomInRight animated']" text="zoomInRight"/>
    <Button :click="onClickBtn" :args="['zoomInUp animated']" text="zoomInUp"/>
    <Button :click="onClickBtn" :args="['zoomOut animated']" text="zoomOut"/>
    <Button :click="onClickBtn" :args="['zoomOutDown animated']" text="zoomOutDown"/>
    <Button :click="onClickBtn" :args="['zoomOutLeft animated']" text="zoomOutLeft"/>
    <Button :click="onClickBtn" :args="['zoomOutRight animated']" text="zoomOutRight"/>
    <Button :click="onClickBtn" :args="['zoomOutUp animated']" text="zoomOutUp"/>
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
  @import "../../assets/seedsui/seedsui-variables.less";
  .button {
    width:40%;
    margin:8px 4%;
  }
</style>
