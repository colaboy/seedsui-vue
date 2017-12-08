<template>
<Page>
  <Header>
    <Titlebar title="picker" />
  </Header>
  <Container>
    <Group css="padding: 0 12px;">
      <InputBox classname="border-b">
        <!-- <InputDate type="datetime" placeholder="请选择日期时间" :value="datetimeVal" :change="datetimeChange"/> -->
        <!-- <input class="input-text" type="text" readOnly="true" :value="datetimeVal" placeholder="请选择日期时间" @click="onClickDateTime"/> -->
        <InputText readOnly="true" :value="datetimeVal" placeholder="请选择日期时间" @click="onClickDateTime"/>
        <Icon classname="color-placeholder icon-calendar"/>
      </InputBox>
      <InputBox classname="border-b">
        <!-- <InputDate type="date" placeholder="请选择日期" :value="dateVal" :change="dateChange"/> -->
        <input class="input-text" type="text" readOnly="true" :value="dateVal" placeholder="请选择日期" @click="onClickDate"/>
        <Icon classname="color-placeholder icon-calendar"/>
      </InputBox>
      <InputBox classname="border-b">
        <!-- <InputDate type="month" placeholder="请选择月份" :value="monthVal" :change="monthChange"/> -->
        <input class="input-text" type="text" readOnly="true" :value="monthVal" placeholder="请选择月份" @click="onClickMonth"/>
        <Icon classname="color-placeholder icon-calendar"/>
      </InputBox>
      <InputBox classname="border-b">
        <!-- <InputDate type="time" placeholder="请选择时间" :value="timeVal" :change="timeChange"/> -->
        <input class="input-text" type="text" readOnly="true" :value="timeVal" placeholder="请选择时间" @click="onClickTime"/>
        <Icon classname="color-placeholder icon-time"/>
      </InputBox>
      <InputBox classname="border-b">
        <!-- <InputDate :value="dateCustomVal" :data="dateCustomData" placeholder="自定义日期" :change="datecustomChange"/> -->
        <input class="input-text" type="text" readOnly="true" :value="dateCustomVal" placeholder="自定义日期" @click="onClickDateCustom"/>
        <Icon classname="color-placeholder icon-calendar"/>
      </InputBox>
    </Group>

    <Group css="padding: 0 12px">
      <InputBox classname="border-b">
        <!-- <InputCity placeholder="请选择城市" type="city" :value="cityVal" :change="cityChange"/> -->
        <input class="input-text" type="text" readOnly="true" :value="cityVal" placeholder="请选择城市" @click="onClickCity"/>
        <i class="color-placeholder icon icon-position"></i>
      </InputBox>
      <InputBox classname="border-b">
        <!-- <InputCity placeholder="请选择省市区" :value="areaVal" :change="areaChange"/> -->
        <input class="input-text" type="text" readOnly="true" :value="areaVal" placeholder="请选择省市区" @click="onClickArea"/>
        <i class="color-placeholder icon icon-position"></i>
      </InputBox>
    </Group>
  </Container>
  <!-- 日期 -->
  <DatePicker :change="datetimeChange" :value="datetimeVal" ref="refDatetime" type="datetime" />
  <DatePicker :change="dateChange" :value="dateVal" ref="refDate" type="date" />
  <DatePicker :change="monthChange" ref="refMonth" type="month" />
  <DatePicker :change="timeChange" ref="refTime" type="time" />
  <DatePicker :data="dateCustomData" :change="datecustomChange" ref="refDateCustom" />
  <!-- 地址 -->
  <CityPicker :change="cityChange" ref="refCity" type="city" />
  <CityPicker :change="areaChange" ref="refArea" type="area" />
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
      datetimeVal: '2017-08-22 08:22',
      dateVal: '2017-10-24',
      monthVal: '',
      timeVal: '',
      cityVal: '江苏省-南京市',
      areaVal: '江苏省-南京市-建邺区'
    }
  },
  methods: {
    // Picker确定事件
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
    },
    // 点击文本框事件
    onClickDateTime () {
      this.$refs.refDatetime.instance.show()
    },
    onClickDate () {
      this.$refs.refDate.instance.show()
    },
    onClickMonth () {
      this.$refs.refMonth.instance.show()
    },
    onClickTime () {
      this.$refs.refTime.instance.show()
    },
    onClickDateCustom () {
      this.$refs.refDateCustom.instance.show()
    },
    onClickCity () {
      this.$refs.refCity.instance.show()
    },
    onClickArea () {
      this.$refs.refArea.instance.show()
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/core/seedsui-variables.less";
</style>
