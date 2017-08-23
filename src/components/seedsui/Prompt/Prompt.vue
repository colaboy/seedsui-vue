<template>
  <div :class="{ 'mask':true,'prompt-mask':true,'active':show,'prompt-cover':cover }">
    <div :class="{ 'prompt':true,'active':show }">
      <div class="prompt-wrapper">{{text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Prompt',
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
