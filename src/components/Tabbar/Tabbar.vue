<template>
  <ul :class="'tabbar '+theme+' '+tabbarClass" :style="tabbarCss+css">
    <li v-for="(item, index) in list" :class="'tab'+(activeIndex===index?' active':'')" :key="index" @click.stop.prevent="onClick(item,index,item.click)">
      <i v-if="item.icon" :class="'icon '+item.icon"></i>
      <label class="tab-label">{{item.text}}</label>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Tabbar',
  props: {
    css: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: ''
    },
    type: { // line | rect | lump | footer
      type: String,
      default: 'line'
    },
    list: {
      type: Array,
      default: function () {
        return [{
          icon: '',
          text: '',
          click: function () { }
        }]
      }
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  watch: {
  },
  created () {
  },
  methods: {
    onClick (item, i, callback) {
      callback(item, i)
    }
  },
  computed: {
    tabbarCss () {
      var css = ''
      if (this.type === 'rect') {
        switch (this.list.length) {
          case 1 :
            css = 'width:30%;'
            break
          case 2 :
            css = 'width:50%;'
            break
          case 3 :
            css = 'width:50%;'
            break
          default :
            css = ''
        }
      }
      return css
    },
    tabbarClass () {
      var classes = ''
      switch (this.type) {
        case 'line' :
          classes = 'tabbar-line animated'
          break
        case 'rect' :
          classes = 'tabbar-rect'
          break
        case 'lump' :
          classes = 'tabbar-lump'
          break
        case 'footer' :
          classes = 'tabbar-footer'
          break
        default :
          classes = 'tabbar-line animated'
      }
      return classes
    }
  }
}
</script>
