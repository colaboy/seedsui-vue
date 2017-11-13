<template>
  <ul :class="'tabbar tabbar-'+type+' animated'+(theme?' '+theme:'')+(type==='line'?' tabbar-line-width'+linewidth:'')+(disabled?' disabled':'')" :data-col="list.length" :style="tabbarCss+css">
    <li v-for="(item, index) in list" :class="'tab'+(activeIndex===index?' active':'')" :key="index" @click.stop.prevent="onClick(item,index,item.click)">
      <i v-if="item.icon && type!=='dropdown'" :class="'icon '+item.icon"></i>
      <label class="tab-label">{{item.text}}</label>
      <i v-if="item.icon && type==='dropdown'" :class="'icon size12 '+item.icon"></i>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Tabbar',
  props: {
    linewidth: {
      type: String,
      default: '60'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    css: {
      type: String,
      default: ''
    },
    theme: { // reverse
      type: String,
      default: ''
    },
    type: { // line | rect | lump | dropdown | footer
      type: String,
      default: 'line'
    },
    list: {
      type: Array,
      default: function () {
        return [{
          icon: '',
          text: '',
          onClick: function () { }
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
    }
  }
}
</script>
<style lang="less">

</style>
