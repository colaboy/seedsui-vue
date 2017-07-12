<template>
  <div v-if="underline" class="sliver underline">
      <span v-if="peg" class="peg"></span>
      <p class="sliver-title">{{text}}</p>
  </div>
</template>
<script>
export default {
  name: 'Sliver',
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
