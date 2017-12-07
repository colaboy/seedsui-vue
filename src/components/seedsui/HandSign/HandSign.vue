<template>
  <div class="hello">
<!--touchstart,touchmove,touchend,touchcancel 这-->
  <button type="" v-on:click="clear">清除</button>
  <button v-on:click="save">保存</button>
    <canvas id="canvas" width="300" height="600" style="border:1px solid black">Canvas画板</canvas>
   <img v-bind:src="url" alt="">
  </div>
 
</template>

<script>
import Draw from './draw.js'

export default {
  data () {
    return {
      draw: null,
      msg: 'Welcome to Your Vue.js App',
      val: true,
      url: ''
    }
  },
  mounted () {
    this.draw = new Draw('canvas')
    this.draw.init()
  },
  methods: {
    clear: function () {
      this.draw.clear()
    },
    save: function () {
      var data = this.draw.save()
      this.url = data
      console.log(data)
    },
    mutate (word) {
      this.$emit('input', word)
    }
  }
}
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#canvas {
  background: pink;
  cursor: default;
}
#keyword-box {
  margin: 10px 0;
}
</style>
