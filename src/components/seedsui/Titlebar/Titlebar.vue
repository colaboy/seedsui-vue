<template>
  <div :class="'titlebar' + (theme==='reverse'?' reverse':'')">
    <div class="titlebar-left">
      <a v-for="(item, index) in lBtn" :key="index" @click.stop.prevent="item.onClick" :class="'titlebar-button'+(item.classsName?' '+item.classsName:'')" :style="item.css">
        <i v-if="item.icon" :class="'icon '+item.icon"></i>
        <span v-if="item.text">{{item.text}}</span>
      </a>
    </div>
    <slot>
      <h1 :class="'titlebar-title nowrap text-center'" v-html="title" @click.stop.prevent="onClick"></h1>
    </slot>
    <div class="titlebar-right">
      <a v-for="(item, index) in rBtn" :key="index" @click.stop.prevent="item.onClick" :class="'titlebar-button'+(item.classsName?' '+item.classsName:'')" :style="item.css">
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
    onClick: {
      type: Function
    },
    lBtn: {
      type: Array,
      default: function () {
        return [{
          icon: 'shape-arrow-left',
          onClick: () => {
            this.onDefaultBack()
          }
        }]
      }
    },
    rBtn: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  created () {
    this.bridge.onBack(function () {
      history.go(-1)
    })
  },
  methods: {
    onDefaultBack () {
      history.go(-1)
    }
  }
}
</script>
<style lang="less">

</style>
