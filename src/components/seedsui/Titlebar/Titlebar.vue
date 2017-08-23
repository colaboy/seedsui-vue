<template>
  <div :class="'titlebar' + (theme==='reverse'?' reverse':'')">
    <div class="titlebar-left">
      <a v-for="(item, index) in lBtn" :key="index" @click.stop.prevent="item.click" class="titlebar-button">
        <i v-if="item.icon" :class="'icon '+item.icon"></i>
        <span v-if="item.text">{{item.text}}</span>
      </a>
    </div>
    <h1 :class="'titlebar-title nowrap text-center'">{{title}}</h1>
    <div class="titlebar-right">
      <a v-for="(item, index) in rBtn" :key="index" @click.stop.prevent="item.click" class="titlebar-button">
        <i v-if="item.icon" :class="'icon '+item.icon"></i>
        <span v-if="item.text">{{item.text}}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Titlebar',
  props: {
    theme: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '默认标题'
    },
    lBtn: {
      type: Array,
      default: function () {
        return [{
          icon: 'icon-arrowleft',
          text: '',
          click: function () { history.go(-1) }
        }]
      }
    },
    rBtn: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
