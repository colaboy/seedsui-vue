<template>
  <div :class="'titlebar' + (theme==='reverse'?' reverse':'')">
    <div class="titlebar-left">
      <a v-for="(item, index) in lBtn" :key="index" @click.stop.prevent="item.click" :class="'titlebar-button'+(item.classname?' '+item.classname:'')" :style="item.css">
        <i v-if="item.icon" :class="'icon '+item.icon"></i>
        <span v-if="item.text">{{item.text}}</span>
      </a>
    </div>
    <slot>
      <h1 :class="'titlebar-title nowrap text-center'" v-html="title" @click.stop.prevent="click"></h1>
    </slot>
    <div class="titlebar-right">
      <a v-for="(item, index) in rBtn" :key="index" @click.stop.prevent="item.click" :class="'titlebar-button'+(item.classname?' '+item.classname:'')" :style="item.css">
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
    click: {
      type: Function
    },
    lBtnclassname: {
      type: String
    },
    rBtnclassname: {
      type: String
    },
    lBtnCss: {
      type: String,
      default: ''
    },
    rBtnCss: {
      type: String,
      default: ''
    },
    lBtn: {
      type: Array,
      default: function () {
        return [{
          icon: 'shape-arrow-left',
          click: () => {
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
