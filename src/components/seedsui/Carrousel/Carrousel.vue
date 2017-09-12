<template>
  <div class="carrousel-container" :style="css">
    <!-- 轮播页 -->
    <div v-if="page" class="carrousel-wrapper">
      <div class="carrousel-slide" v-for="(item, index) in page" :key="index">
        <slot :name="'carrousel-'+item" style="background-color:red;"></slot>
      </div>
    </div>
    <!-- 轮播图 -->
    <div v-else class="carrousel-wrapper">
      <div class="carrousel-slide" v-for="(item, index) in list" :key="index" @click.stop.prevent="item.click">
        <img v-if="item.img" class="slide-banner" :src="imgs.default.url" :data-load-src="item.img"/>
        <div class="slide-title" v-if="item.text">
          <i :class="'icon slide-title-icon'+(item.icon?' '+item.icon:'')"></i>
          <span class="nowrap slide-title-font" style="margin-right: 20px;">
            {{item.text}}
          </span>
        </div>
      </div>
    </div>
    <div v-if="pagination" class="carrousel-pagination"></div>
  </div>
</template>
<script>
import defaultUrl from './default.jpg'
import Carrousel from './carrousel.js'
export default {
  name: 'Carrousel',
  props: {
    css: {
      type: String
    },
    page: {
      type: Number,
      default: 0
    },
    pagination: {
      type: String,
      default: '.carrousel-pagination'
    },
    loop: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Number,
      default: 0
    },
    slidesPerView: {
      type: Number,
      default: 1
    },
    list: {
      type: Array,
      default: function () {
        return [{
          img: '',
          icon: '',
          text: '',
          click: function () { }
        }]
      }
    },
    change: {
      type: Function
    }
  },
  data () {
    return {
      instance: null,
      imgs: {
        default: {url: defaultUrl}
      }
    }
  },
  methods: {
    onSlideChangeEnd (e) {
      if (this.change) this.change(e)
    }
  },
  mounted () {
    if (this.instance) return
    setTimeout(() => {
      this.instance = new Carrousel(this.$el, {
        pagination: this.pagination,
        autoplay: this.autoplay,
        slidesPerView: this.slidesPerView,
        loop: this.loop,
        onSlideChangeEnd: this.onSlideChangeEnd
      })
    }, 100)
  }
}
</script>
