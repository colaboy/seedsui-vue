<template>
<Page>
  <Header>
    <Titlebar title="picker" />
  </Header>
  <Container>
    <Group css="padding: 0 12px;">
      <div class="inputbox underline">
        <InputDate type="datetime" placeholder="请选择日期时间" :value="datetimeVal" :change="datetimeChange"/>
        <i class="color-placeholder icon icon-calendar"></i>
      </div>
      <div class="inputbox underline">
        <InputDate type="date" placeholder="请选择日期" :value="dateVal" :change="dateChange"/>
        <i class="color-placeholder icon icon-calendar"></i>
      </div>
      <div class="inputbox underline">
        <InputDate type="month" placeholder="请选择月份" :value="monthVal" :change="monthChange"/>
        <i class="color-placeholder icon icon-calendar"></i>
      </div>
      <div class="inputbox underline">
        <InputDate type="time" placeholder="请选择时间" :value="timeVal" :change="timeChange"/>
        <i class="color-placeholder icon icon-time"></i>
      </div>
      <div class="inputbox underline">
        <InputDate :value="dateCustomVal" :data="dateCustomData" placeholder="自定义日期" :change="datecustomChange"/>
        <i class="color-placeholder icon icon-calendar"></i>
      </div>
    </Group>

    <Group css="padding: 0 12px">
      <div class="inputbox underline">
        <InputCity placeholder="请选择城市" type="city" :value="cityVal" :change="cityChange"/>
        <i class="color-placeholder icon icon-position"></i>
      </div>
      <div class="inputbox underline">
        <InputCity placeholder="请选择省市区" :value="areaVal" :change="areaChange"/>
        <i class="color-placeholder icon icon-position"></i>
      </div>
    </Group>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'PickerDemo',
  data () {
    return {
      dateCustomVal: '2017-08-02',
      dateCustomData: {
        year: ['2016', '2017', '2018'],
        month: ['02', '03', '05', '06', '07', '08', '09'],
        day: ['01', '02', '03', '04', '05', '31']
      },
      datetimeVal: '',
      dateVal: '',
      monthVal: '',
      timeVal: '',
      cityVal: '江苏省-南京市',
      areaVal: '江苏省-南京市-建邺区'
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
      this.dateCustomVal = val
    },
    cityChange (val) {
      this.cityVal = val
    },
    areaChange (val) {
      this.areaVal = val
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/seedsui-variables.less";
</style>
