<template>
  <input :class="classname" :style="css" type="text" readOnly="true" :value="value" :placeholder="placeholder" @click="onClickPicker"/>
</template>

<script>
import citys from './picker.city.data.js'
import CityPicker from './picker.city.js'
export default {
  name: 'InputCity',
  props: {
    type: {
      type: String,
      default: 'area'
    },
    change: {
      type: Function
    },
    classname: {
      type: String,
      default: 'input-text'
    },
    css: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择城市'
    }
  },
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    this.initInstance()
  },
  methods: {
    initInstance () {
      var defaultValue = this.value
      var defaultProvince = ''
      var defaultCity = ''
      var defaultArea = ''
      // 默认值
      if (defaultValue) {
        var defaultValues = defaultValue.split('-')
        if (defaultValues[0]) defaultProvince = defaultValues[0]
        if (defaultValues[1]) defaultCity = defaultValues[1]
        if (defaultValues[2]) defaultArea = defaultValues[2]
      }
      // render数据
      this.instance = new CityPicker({
        viewType: this.type,
        data: citys,
        defaultProvince: defaultProvince,
        defaultCity: defaultCity,
        defaultArea: defaultArea,
        onClickDone: (e) => {
          if (this.change) this.change(e.activeText)
          e.hide()
        }
      })
    },
    onClickPicker (e) {
      this.instance.update()
      this.instance.show()
    }
  }
}
</script>
<style lang="less">
  @import "picker.less";
  @import "../seedsui-tool.less";
</style>
