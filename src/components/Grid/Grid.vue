<template>
  <ul :class="'grid'+(type==='thumbnail'?' app-grid-thumbnail':'')" :data-col="col">
    <li v-for="(item, index) in list" :key="index" @click.stop.prevent="item.click">
      <a class="grid-icon size50" :style="'background-color:'+(bgColors[index]?bgColors[index]:'#20aeff')+';color:'+(colors[index]?colors[index]:'white')">
        <img v-if="item.img" :src="item.img">
        <i v-if="item.icon" :class="'icon '+item.icon"></i>
        <span v-if="item.tip" class="tip" style="position:absolute;top:-4px;right:-4px;">{{item.tip}}</span>
        <span v-if="item.badge" class="badge" style="position:absolute;top:-4px;right:-4px;">{{item.badge}}</span>
        <span v-if="item.close" class="close" @click.stop.prevent="item.clickClose"><i class="icon icon-close"></i></span>
      </a>
      <label class="grid-label" v-if="item.text">{{item.text}}</label>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Grid',
  props: {
    type: '', // thumbnail
    col: '3',
    colors: {
      type: Array,
      default: function () {
        return ['white']
      }
    },
    bgColors: {
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
          bgColor: '#20aeff',
          color: 'white',
          clickClose: function () { }
        }]
      }
    }
  }
}
</script>
