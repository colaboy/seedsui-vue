<template>
<div>
  <header>
    <Titlebar title="loading" back="true"></Titlebar>
  </header>
  <article>
    <Button text="显示spinning遮罩" buttonClass="block primary" buttonCss="margin:12px 10px;" @onClick="onClickSpinHandler"></Button>
    <Button text="显示fading遮罩" buttonClass="block submit" buttonCss="margin:12px 10px;" @onClick="onClickFadHandler"></Button>
  </article>
  <LoadingFading :show="fadShow"></LoadingFading>
  <LoadingSpinning :show="spinShow"></LoadingSpinning>
</div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      fadShow: false,
      spinShow: false
    }
  },
  methods: {
    onClickFadHandler (e) {
      this.fadShow = true
      setTimeout(() => { this.fadShow = false }, 2000)
    },
    onClickSpinHandler (e) {
      this.spinShow = true
      setTimeout(() => { this.spinShow = false }, 2000)
    }
  }
}
</script>
