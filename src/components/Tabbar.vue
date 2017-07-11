<template>
  <ul class="tabbar tabbar-line animated">
    <li class="tab">
        <label class="tab-label">头条</label>
    </li>
    <li class="tab">
        <label class="tab-label">推荐</label>
    </li>
    <li class="tab">
        <label class="tab-label">娱乐</label>
    </li>
    <li class="tab active">
        <label class="tab-label">本地</label>
    </li>
    <li class="tab">
        <label class="tab-label">财经</label>
    </li>
    <li class="tab">
        <label class="tab-label">自媒体</label>
    </li>
    <li class="tab">
        <label class="tab-label">科技</label>
    </li>
    <li class="tab">
        <label class="tab-label">美女</label>
    </li>
    <li class="tab">
        <label class="tab-label">军事</label>
    </li>
    <li class="tab">
        <label class="tab-label">体育</label>
    </li>
    <li class="tab">
        <label class="tab-label">历史</label>
    </li>
    <li class="tab">
        <label class="tab-label">汽车</label>
    </li>
    <li class="tab">
        <label class="tab-label">时尚</label>
    </li>
    <li class="tab">
        <label class="tab-label">房产</label>
    </li>
    <li class="tab">
        <label class="tab-label">段子</label>
    </li>
    <li class="tab">
        <label class="tab-label">舆情</label>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Tabbar',
  props: {
    text: {
      type: String,
      default: '默认标题'
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
