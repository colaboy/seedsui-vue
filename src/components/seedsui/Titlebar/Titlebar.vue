<template>
  <div :class="'titlebar' + (theme==='reverse'?' reverse':'')">
    <div class="titlebar-left">
      <a v-for="(item, index) in lBtn" :key="index" @click.stop.prevent="item.click" :class="'titlebar-button'+(item.className?' '+item.className:'')" :style="item.css">
        <i v-if="item.icon" :class="'icon '+item.icon"></i>
        <span v-if="item.text">{{item.text}}</span>
      </a>
    </div>
    <slot>
      <h1 :class="'titlebar-title nowrap text-center'">{{title}}</h1>
    </slot>
    <div class="titlebar-right">
      <a v-for="(item, index) in rBtn" :key="index" @click.stop.prevent="item.click" :class="'titlebar-button'+(item.className?' '+item.className:'')" :style="item.css">
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
    lBtnClassName: {
      type: String
    },
    rBtnClassName: {
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
          icon: 'icon-arrowleft size20',
          click: () => { this.bridge.close() }
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
