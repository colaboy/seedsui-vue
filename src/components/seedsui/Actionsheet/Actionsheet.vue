<template>
  <div class="mask actionsheet-mask">
    <div class="actionsheet">
      <div class="actionsheet-group">
        <a class="actionsheet-option" v-for="(item, index) in list" :key="index" @click.stop.prevent="item.onClick(item)">
          {{item.text}}
        </a>
      </div>
      <a v-if="buttonCancelHTML" class="actionsheet-cancel">取消</a>
    </div>
  </div>
</template>
<script>
import Actionsheet from './actionsheet.js'
export default {
  name: 'Actionsheet',
  props: {
    isClickMaskHide: {
      type: Boolean,
      default: true
    },
    buttonCancelHTML: {
      type: String,
      default: '取消'
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
    }
  },
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    this.instance = new Actionsheet({
      mask: this.$el,
      isClickMaskHide: this.isClickMaskHide
    })
  },
  methods: {
    onClickOption (e, callback) {
      callback()
    }
  }
}
</script>
<style lang="less">

</style>
