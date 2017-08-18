<template>
  <ul :class="'grid '+gridClass+(bordered?' grid-bordered':'')" :data-col="col" :style="css">
    <li v-for="(item, index) in list" :key="index" @click.stop.prevent="item.click">
      <a class="grid-icon" :style="getIconStyle(index)">
        <img v-if="type==='album' && item.img" :src="item.img">
        <i v-if="(type==='square' || type==='pure') && item.icon" :class="'icon '+item.icon"></i>
        <span v-if="item.tip" class="tip">{{item.tip}}</span>
        <span v-if="item.badge" class="badge">{{item.badge}}</span>
        <span v-if="item.close" class="close" @click.stop.prevent="item.clickClose">
          <i class="icon icon-close"></i>
        </span>
      </a>
      <label class="grid-label" v-if="item.text">{{item.text}}</label>
    </li>
    <li v-if="this.type === 'album' && this.add === true">
      <a class="grid-icon grid-icon-add">
        <i class="icon icon-plus size50"></i>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Grid',
  props: {
    css: {
      type: String,
      default: ''
    },
    type: {
      type: String, // square | pure | album
      default: 'square'
    },
    bordered: {
      type: Boolean,
      default: false
    },
    add: {
      type: Boolean,
      default: true
    },
    col: '3',
    colors: {
      type: Array,
      default: function () {
        return ['#4485fb', '#eda200', '#38ba35', '#41ce29', '#e55f5f', '#eecf3d']
      }
    },
    list: {
      type: Array,
      default: function () {
        return [{
          icon: '',
          text: '',
          click: function () { },
          tip: '',
          badge: '',
          close: false,
          clickClose: function () { }
        }]
      }
    }
  },
  methods: {
    getIconStyle (index) {
      if (this.type === 'square') {
        return 'background-color:' + (this.colors[index] ? this.colors[index] : this.colors[0]) + ';color:white;'
      } else if (this.type === 'pure') {
        return 'color:' + (this.colors[index] ? this.colors[index] : this.colors[0]) + ';'
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    gridClass () {
      if (this.type === 'album') {
        return 'grid-album'
      } else if (this.type === 'pure') {
        return 'grid-pure'
      } else {
        return 'grid-square'
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/styles/variables.less";
</style>
