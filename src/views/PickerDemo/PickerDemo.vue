<template>
<div>
  <header>
    <Titlebar title="picker" />
  </header>
  <article>
    <Group css="padding: 0 12px;">
      <div class="inputbox underline">
        <InputDate type="datetime" placeholder="请选择日期时间" :change="datetimeChange"/>
        <i class="color-placeholder icon icon-calendar"></i>
      </div>
      <div class="inputbox underline">
        <InputDate type="date" placeholder="请选择日期" :change="dateChange"/>
        <i class="color-placeholder icon icon-calendar"></i>
      </div>
      <div class="inputbox underline">
        <InputDate type="month" placeholder="请选择月份" :change="monthChange"/>
        <i class="color-placeholder icon icon-calendar"></i>
      </div>
      <div class="inputbox underline">
        <InputDate type="time" placeholder="请选择时间" :change="timeChange"/>
        <i class="color-placeholder icon icon-time"></i>
      </div>
      <div class="inputbox underline">
        <InputDate :value="dateDefault" :data="dateData" placeholder="自定义日期" :change="datecustomChange"/>
        <i class="color-placeholder icon icon-calendar"></i>
      </div>
    </Group>

    <Group css="padding: 0 12px">
      <div class="inputbox underline">
        <InputCity :value="areaDefault" placeholder="请选择城市" :change="cityChange"/>
        <i class="color-placeholder icon icon-position"></i>
      </div>
      <div class="inputbox underline">
        <InputCity type="city" :value="cityDefault" placeholder="请选择城市" :change="cityChange"/>
        <i class="color-placeholder icon icon-position"></i>
      </div>
    </Group>
  </article>
</div>
</template>

<script>
export default {
  name: 'PickerDemo',
  data () {
    return {
      dateDefault: '2017-08-02',
      dateData: {
        year: ['2016', '2017', '2018'],
        month: ['02', '03', '05', '06', '07', '08', '09'],
        day: ['01', '02', '03', '04', '05', '31']
      },
      cityDefault: '江苏省-南京市',
      areaDefault: '江苏省-南京市-建邺区',
      datetimeVal: '',
      dateVal: '',
      monthVal: '',
      timeVal: '',
      datecustomVal: '',
      cityVal: ''
    }
  },
  methods: {
    datetimeChange (val) {
      this.datetimeVal = val
    },
    dateChange (val) {
      this.dateVal = val
    },
    monthChange (val) {
      this.monthVal = val
    },
    timeChange (val) {
      this.timeVal = val
    },
    datecustomChange (val) {
      this.datecustomVal = val
    },
    cityChange (val) {
      this.cityVal = val
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/styles/variables.less";
</style>
