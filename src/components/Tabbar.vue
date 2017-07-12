<template>
  <ul :class="'tabbar '+tabbarClass+' '+tabbarType" :style="tabbarCss">
      <li v-for="(li,$index) in list" :class="{tab:true,active:activeIndex===$index}" @click="onClickHandler($event,$index)">
          <i v-if="li.icon" :class="'icon '+li.icon"></i>
          <label class="tab-label">{{li.text}}</label>
      </li>
  </ul>
</template>
<script>
export default {
  name: 'Tabbar',
  props: {
    tabbarClass: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'line'
    },
    data: {
      type: Array,
      default: []
    },
    activeStatus: {
      default: 0
    }
  },
  data () {
    return {
      activeIndex: 0,
      list: this.data
    }
  },
  watch: {
    activeStatus () {
      this.initActiveIndex()
    }
  },
  created () {
    this.initActiveIndex()
  },
  methods: {
    initActiveIndex () {
      this.data.forEach((n, i) => {
        if (this.activeStatus === n.status) {
          this.activeIndex = i
        }
      })
    },
    onClickHandler (e, i) {
      this.activeIndex = i
      this.$emit('onClick', this)
    }
  },
  computed: {
    tabbarCss () {
      var css = ''
      if (this.type === 'rect') {
        switch (this.data.length) {
          case 1 :
            css = 'width:30%'
            break
          case 2 :
            css = 'width:50%'
            break
          case 3 :
            css = 'width:50%'
            break
          default :
            css = ''
        }
      }
      return css
    },
    tabbarType () {
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
