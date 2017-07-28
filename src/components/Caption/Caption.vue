<template>
  <div v-if="underline" class="caption underline">
      <span v-if="peg" class="peg"></span>
      <p class="caption-title">{{text}}</p>
  </div>
</template>
<script>
export default {
  name: 'Caption',
  props: {
    text: {
      type: String,
      default: ''
    },
    underline: {
      default: 'true'
    },
    peg: {
      default: 'true'
    }
  }
}
</script>
